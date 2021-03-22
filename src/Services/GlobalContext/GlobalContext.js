import React, { useCallback, useEffect } from "react";
import { profile } from "../APIservices";

const initialState = {
  address: {
    address1: "",
    address2: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
  qualification: [{ deg: "", passOut: "", completedAt: "" }],
  count: [0],
  monthlyIncome: "",
  availableBalance: "",
  salaryDate: "",
  workInfo: {
    company: "",
    location: {
      country: "",
      state: "",
      city: "",
      area: "",
      pincode: "",
    },
    department: "",
    designation: "",
    role: "",
    joinedAt: "",
  },
};
export const GlobalContext = React.createContext(initialState);

export default ({ children }) => {
  const [State, setState] = React.useState(initialState);

  const getProfile = async () => {
    try {
      let response = await profile();
      if (response.success) {
        setState({
          ...State,
          ...response.data,
          count: response.data.qualification.map((x, i) => i),
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <GlobalContext.Provider value={[State, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};
