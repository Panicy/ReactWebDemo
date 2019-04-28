import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    showAvatar:false,
    visible:false,
    childrenDrawer:false,
    CarDemo:false
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.UPCARDEMO:
            return state.merge({
                CarDemo:true,
                visible:true
            });
        case constants.CLOSEDRAWER:
            return state.merge({
                visible:false,
                CarDemo:false
            });
        case constants.SHOWCHILDDRAWER:
            return state.set('childrenDrawer',true);
        case constants.ClOSECHILDDRAWER:
            return state.set('childrenDrawer',false);
        default:
            return state;
    }
}