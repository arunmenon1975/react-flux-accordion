import React from 'react';
export default class AccordionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClear: false
    };
  };
  componentWillMount(){
  };
  render(){
    return (
      <div style={this.props.style} className={this.props.classN}>
        <div className="panel-body accordionBody">
         <div className="row">
          <div className="col col-sm-8">
            <img src={this.props.data.ac.body.imageurl} width="100%" height="auto" alt={this.props.data.ac.header["long-description"]} /> 
          </div> 
          <div className="col col-sm-4">
            <p> {this.props.data.ac.body["long-description"]}</p>
          </div>
        </div>
        </div>
      </div>
    );
  };
  componentDidMount(){
  };
};