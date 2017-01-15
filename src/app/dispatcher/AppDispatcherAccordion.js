import {Dispatcher} from 'flux';
let AppDispatcherAccordion = new Dispatcher();
AppDispatcherAccordion.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION', 
    action: action
  });
};
module.exports = AppDispatcherAccordion;