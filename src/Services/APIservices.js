import Axios from "axios";
const api = "https://pem-backend.herokuapp.com/api";
// const api = "http://localhost:3100/api"

export const signInFun = async (body) => {
  console.log("object", body);
  let response;
  try {
    response = await Axios.post(`${api}/user/login`, body, {
      headers: {
        "Content-Type": "application/json",
        //   "Authorization": token,
      },
    });
    if (response.data.success) {
      return await response.data;
    }
  } catch (e) {
    throw e;
  }
};

export const signUpFun = async (body) => {
  let response;
  try {
    response = await Axios.post(`${api}/user/register`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.success) {
      return await response.data;
    }
  } catch (e) {
    throw e;
  }
};

export const addressFun = async (body) => {
  let response;
  let token = await localStorage.getItem("token");
  try {
    response = await Axios.put(`${api}/user/address`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    if (response.data.success) {
      return await response.data;
    }
  } catch (e) {
    throw e;
  }
};

export const qualificationFun = async (body) => {
  let response;
  let token = await localStorage.getItem("token");
  try {
    response = await Axios.put(
      `${api}/user/qualification`,
      { qualification: body },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    if (response.data.success) {
      return await response.data;
    }
  } catch (e) {
    throw e;
  }
};

export const workFun = async (body) => {
  let response;
  let token = await localStorage.getItem("token");
  try {
    response = await Axios.put(
      `${api}/user/work`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    if (response.data.success) {
      return await response.data;
    }
  } catch (e) {
    throw e;
  }
};

export const profile = async () => {
  let response;
  let token = await localStorage.getItem("token");
  try {
    response = await Axios.get(`${api}/user/profile`, {
      headers: {
        "Content-Type": "applicatio/json",
        Authorization: `${token}`,
      },
    });
    if (response.data.success) {
      return await response.data;
    }
  } catch (e) {
    throw e;
  }
};

export const verifyFun = async(body) => {
  let response;
  let token = localStorage.getItem("token");
  try{
    response = await Axios.post(`${api}/user/verify`,body,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}


export const createExpense = async(body) => {
  let response;
  let token = localStorage.getItem("token");
  try{
    response = await Axios.post(`${api}/expense/create`,body,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const createRegular = async(body) => {
  let response;
  let token = localStorage.getItem("token");
  try{
    response = await Axios.post(`${api}/regular/create`,body,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const createRemainder = async(body) => {
  let response;
  let token = localStorage.getItem("token");
  try{
    response = await Axios.post(`${api}/remainder/create`,body,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getExpenses = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/expense/getAll`, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getRemainder = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/remainder/getAll`, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getRegular = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/regular/getAll`, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getHistory = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/history/getAll`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getNotification = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/user/notification`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const updateProfile = async(body) => {
  let response;
  let token = await localStorage.getItem("token");
  try {
    response = await Axios.put(`${api}/user/update`,body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":`${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const updateExpense = async(body) => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.put(`${api}/expense/update`, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const updateRemainder = async(body) => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.put(`${api}/remainder/update`, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const updateRegular = async(body) => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.put(`${api}/regular/update`, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const salaryCreate = async(body) => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.post(`${api}/salary/create`,body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":`${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const salaryUpdate = async(body) => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.put(`${api}/salary/update`, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getSalary = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/salary/getAll`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export const getChart = async() => {
  let response;
  let token = await localStorage.getItem("token");
  try{
    response = await Axios.get(`${api}/expense/chart`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    });
    if(response.data.success){
      return await response.data;
    }
  }
  catch(e){
    console.log(e);
  }
}
