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
