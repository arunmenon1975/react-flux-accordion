import AppDispatcher from '../dispatcher/AppDispatcherAccordion';
import appConstants from '../constants/appConstantsAccordion';
import {EventEmitter} from  'events';
import data from "../../../data.js";
/*
The STORE listens for certain EVENTS and when it hears an EVENT(from the DISPATCHER)it is listening for, it Modifies its internal Data then Emits a CHANGE Event which a COMPONENT listens for, and then the COMPONENT updates itself...a full circle. 
[courtesy: graphic avialable at https://tylermcginnis.com/react-js-tutorial-pt-3-architecting-react-js-apps-with-flux/]
*/
let CHANGE_EVENT = 'change';
let store = { 
  list: setInitialStoreData()
};
let updateState = function(obj){
  store.list.map((object, i) => {
    if(i===obj.index && !obj.isShown){
      return object.isShown = !object.isShown;
    }
    else {
      return object.isShown= false
    }
  });
};
let accordionStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(change){
    this.on(CHANGE_EVENT, change);
  },
  removeChangeListener: function(change){
    this.removeListener(CHANGE_EVENT, change);
  },
  getList: function(){
    return store.list;
  },
});
  function setInitialStoreData (){
    let abc=[];
    data.accordion.items.item.map((object, i) => {
      return abc.push({"isShown":false, "ac":object})
    });
    return abc
  }
AppDispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    case appConstants.UPDATE_STATE:
      updateState(action.data);
      accordionStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});
module.exports = accordionStore;