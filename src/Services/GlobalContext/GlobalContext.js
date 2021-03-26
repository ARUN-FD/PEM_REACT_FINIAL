import React, { useEffect } from "react";
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
  monthlyIncome: 0,
  availableBalance: 0,
  monthExpense: 0,
  totalExpense: 0,
  salaryDate: "01",
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

const Global = ({ children }) => {
  const [State, setState] = React.useState(initialState);

  useEffect(() => {
    getProfile();
  }, []);

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

  return (
    <GlobalContext.Provider value={[State, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;