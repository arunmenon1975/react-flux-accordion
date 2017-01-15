import React from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';
import accordionActions from '../actions/accordionActions';
const togHt = {
    active: {
        display: "block",
        padding: 0,
        borderBottom: "1px solid #ccc",
        overflow: "hidden"
    },
    inActive: {
      display: "none",
        padding: 0,
        borderBottom: "1px solid #ccc",
        overflow: "hidden"
    }
};
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBodyShown: false,
    //  activeId: ""
    };
     this.handleUpdateState = this.handleUpdateState.bind(this);
  }; 
  componentWillMount(){
  };
  handleUpdateState(){
    let a = this.props.index;
    accordionActions.updateState(a,this.state.isBodyShown);
    this.setState({
      isBodyShown: !this.state.isBodyShown,
    //  activeId : this.props.data.id
    });
  };
  render(){
    const stateHtStyle = this.props.data.isShown? togHt.active: togHt.inActive;
    const stateHtClass = this.props.data.isShown? "max": "min";
    return (
            <div>
              <AccordionHeader ref={(div) => { this.accHead = div; }} data={this.props.data}  tap={this.handleUpdateState} /> 
              <AccordionBody ind="{this.props.index}" ref={(input) => { this.accBody = input; }} data={this.props.data} style={stateHtStyle} classN={stateHtClass} />  
            </div>
     );
  };
  componentDidMount(){
  };
}
Accordion.propTypes ={
  tap: React.PropTypes.func,
  data: React.PropTypes.object,
 // isBodyShown: React.PropTypes.func
};