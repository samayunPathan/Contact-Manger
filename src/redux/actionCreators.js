import * as actionTypes from './actionTypes';
import axios from 'axios';

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
    .then(response=>console.log(response))
}