import Axios from "axios";

export const signInFun = async (body) => {
  console.log("object", body);
  let response;
  try {
    response = await Axios.post("/user/login", body, {
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
    response = await Axios.post("/user/register", body, {
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
    response = await Axios.put("/user/address", body, {
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
      "/user/qualification",
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
      "/user/work",
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
    response = await Axios.get("/user/profile", {
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
    response = await Axios.post("/user/verify",body,{
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
    response = await Axios.post("/expense/create",body,{
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
    response = await Axios.post("/regular/create",body,{
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
    response = await Axios.post("/remainder/create",body,{
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
    response = await Axios.get("/expense/getAll", {
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
    response = await Axios.get("/remainder/getAll", {
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
    response = await Axios.get("/regular/getAll", {
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
    response = await Axios.get("/history/getAll", {
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
    response = await Axios.get("/user/notification", {
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
    response = await Axios.put("/user/update",body, {
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
    response = await Axios.put("/expense/update", body, {
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
    response = await Axios.put("/remainder/update", body, {
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
    response = await Axios.put("/regular/update", body, {
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
    response = await Axios.post("/salary/create",body, {
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
    response = await Axios.put("/salary/update", body, {
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
    response = await Axios.get("/salary/getAll", {
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