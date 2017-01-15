import React, { Component } from 'react';
import  Accordions from './components/Accordions';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class App extends Component {
  render() {
    return (
      <main className="container">
        <div className="row"> 
            <Accordions />
        </div> 
      </main>
    );
  }
}
export default App;