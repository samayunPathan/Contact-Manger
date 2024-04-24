import * as actionTypes from './actionTypes';

const INITAL_STATE= {
    token: null,
    userId:null,



}

export const reducer = (state=INITAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token:action.payload.token,
                userId:action.payload.userId,
            }
        default:
            return state;
    }
}