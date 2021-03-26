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
export const SetupContext = React.createContext(initialState);

const SetUp = ({ children }) => {
  const [setup, setSetup] = React.useState(initialState);

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await profile();
        if (response.success) {
          setSetup({
            ...setup,
            ...response.data,
            count: response.data.qualification.map((x, i) => i),
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    if(!setup.firstName){
      getProfile();
    }
  }, [setup]);

  return (
    <SetupContext.Provider value={[setup, setSetup]}>
      {children}
    </SetupContext.Provider>
  );
};

export default SetUp;