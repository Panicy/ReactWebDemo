import {constants} from './index';
import { fromJS} from 'immutable';
export const showToastAction=(data)=>({
    title:fromJS(data),
    type:constants.TOASTVISIBLE
})
export const closeToastAction=()=>({
    type:constants.TOASTCLOSEVISIBLE
})