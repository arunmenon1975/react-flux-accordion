import AppDispatcherAccordion from '../dispatcher/AppDispatcherAccordion';
import appConstantsAccordion from '../constants/appConstantsAccordion';
let accordionActions = {
  updateState: function(index,item){
    AppDispatcherAccordion.handleAction({
      actionType: appConstantsAccordion.UPDATE_STATE,
      data: {index,item}
    });
  }
};
module.exports = accordionActions;