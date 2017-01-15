import React from 'react';
import Accordion from './Accordion';
import accordionStore from '../stores/accordionStore';
import accordionActions from '../actions/accordionActions';

/*
When a COMPONENT mounts, it gets its INITIAL STATE from a STORE, 
then sets up a LISTENER so that when a store EMITS a CHANGE Event, 
it will go and refresh the data from the store 
and RE-UPDATE its own Internal state.

A Component FUNCTION invoked an ACTION Method

An Action invokes a Method on the DISPATCHER which Emits an EVENT 
with a PAYLOAD or data that needs to go to the STORE

The STORE listens for certain EVENTS
and when it hears an EVENT(from the DISPATCHER)it is listening for, 
it Modifies its internal Data then Emits a CHANGE Event 
which a COMPONENT listens for, and then the COMPONENT updates itself...a full circle
[courtesy: graphic avialable at https://tylermcginnis.com/react-js-tutorial-pt-3-architecting-react-js-apps-with-flux/]
*/

export default class Accordions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: accordionStore.getList(),
      //accordClicked: ""
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setAccordId = this.setAccordId.bind(this);
  };
  setAccordId(a){ 
    this.setState({
     // accordClicked: a
    });
  };
  componentDidMount(){
    accordionStore.addChangeListener(this.onChange);
  };
  componentWillUnmount(){
    accordionStore.removeChangeListener(this.onChange);
  };
  handleUpdateState(newItem){
    accordionActions.updateState(newItem);
  };
  onChange(){
    this.setState({
      list: accordionStore.getList()
    })
  };
  render(){
    let initAccordion=[];
    accordionStore.getList().map((object, i) => {
      return initAccordion.push(<Accordion data={object} key={i} index={i} hits={this.setAccordId} />)
  });
    return (
      <section className="col col-sm-12">
          <h3 className="text-center"> Accordion</h3>
          <div className="panel panel-default">
            {initAccordion}
        </div>
      </section>
    );
  };
};
