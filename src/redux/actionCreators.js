import { type } from '@testing-library/user-event/dist/type';
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSuccess=(token,userId)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload :{
            token:token,
            userId:userId,
        }
    }

}

export const authFailed=(errMessage)=>{
    return{
        type:actionTypes.AUTH_FAILED,
        payload:errMessage,
    }
}

export const auth=(email,password,mode)=>dispatch=>{
    const authData={
        email:email,
        password:password,
    }
    let authUrl=null;
    if(mode==='Sign Up'){
        authUrl="#";
    }else{
        authUrl="#";
    }
    const API_KEY='#';
    axios.post(authUrl+API_KEY,authData)
    .then(response =>{
        localStorage.setItem('token',response.data.idToken);
        localStorage.setItem('userId',response.data.localId);
        const expirationTime=new Date(new Date().getTime()+response.data.expiresIn*1000);
        localStorage.setItem('expirationTime',expirationTime);
        dispatch(authSuccess(response.data.idToken,response.data.localId))
    })
    .catch(err=>{
        dispatch(authFailed(err.response.data.error.message));
    })
}

export const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return {
        type:actionTypes.AUTH_LOGOUT,
    }
}

export const authCheck=()=>dispatch=>{
    const token=localStorage.getItem('token');
    if(!token){
        //logout
        dispatch(logout())
    }else{
        const expirationTime=new Date(localStorage.getItem('expirationTime'));
        if (expirationTime<=new Date()){
            //logout
            dispatch(logout())
        }else{
            const userId=localStorage.getItem('userId');
            dispatch(authSuccess(token,userId));
        }
    }

} 