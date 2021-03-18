import Axios from 'axios';

export const signInFun = async(body) => {
    console.log("object",body)
    let response;
    try{
        response = await Axios.post('/user/login',body, {
            headers: {
              "Content-Type": "application/json",
            //   "Authorization": token,
            }
        })
        if(response.data.success){
            return await response.data;
        }
    }
    catch(e){
        throw e;
    }
}

export const signUpFun = async(body) => {
    let response;
    try{
        response = Axios.post('/user/register',body, {
            headers: {
              "Content-Type": "application/json"
            }
        })
        console.log(response,"token1");
        if(response.success){
            return await response.json()
        }
    }
    catch(e){
        throw e;
    }
}