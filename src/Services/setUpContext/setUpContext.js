import React from 'react';

const initialState = {
    address: {
        address1: "",
        address2: "",
        area: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
      },
    qualification: [{ deg: "",  passOut: "", completedAt: ""}],
    count: [0],
    work: {
        monthlyIncome: "",
        availableBalance: "",
        workInfo: {
            company: "",
            location: {
                country: "",
                state: "",
                city: "",
                area: "",
                pincode: ""
            },
            department: "",
            designation: "",
            role: "",
            joinedAt: ""
        },
        salaryDate: ""
    }
};
export const SetupContext = React.createContext(initialState);

export default ({children}) => {
  const [setup, setSetup] = React.useState(initialState);
  return (
    <SetupContext.Provider value={[setup, setSetup]}>
      {children}
    </SetupContext.Provider>
  );
};