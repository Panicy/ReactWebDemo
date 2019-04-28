import { fromJS } from 'immutable';
import {constants} from './index';
const defaultState=fromJS({
    Toastvisible:false,
    ToastconfirmLoading:false,
    ToastTitle:''
});

export default (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case constants.TOASTVISIBLE:
            return state.merge({
                Toastvisible:true,
                ToastTitle:action.title
            });
        case constants.TOASTCLOSEVISIBLE:
            return state.set('Toastvisible',false)
        default:
            return state;
    }
}