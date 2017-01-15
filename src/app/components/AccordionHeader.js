import React from 'react';
export default class AccordionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClear: false
    };
    this.isClicked = this.isClicked.bind(this);
  };
  isClicked(){ 
    this.props.tap();
  };
  componentWillMount(){
  };
  render(){
    return (
      <div className="panel-heading accordionHeader" onClick={this.props.tap}>
        <h4>  {this.props.data.ac.header["name"]} </h4>
        <div className="row">
          <div className="col col-sm-3">
            <img src={this.props.data.ac.header.imageurl} width="200" height="150" alt={this.props.data.ac.header["short-description"]} /> 
          </div> 
          <div className="col col-sm-9">
            <p> {this.props.data.ac.header["short-description"]}</p> 
          </div>
        </div>
      </div>
    );
  };
  componentDidMount(){
  };
};