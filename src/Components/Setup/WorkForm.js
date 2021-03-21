import React, { useContext, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import Select from "react-select";
import { SetupContext } from "../../Services/setUpContext/setUpContext";
import { workFun } from "../../Services/APIservices";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(1),
  },
}));

export default function WorkForm({ handleBack, handleNext }) {
  const [setup, setSetup] = useContext(SetupContext);
  const [state, setState] = useState(setup);
  const classes = useStyles();

  const workUpdate = async() => {
    let response;
    try{
      response = await workFun({
        workInfo: state.workInfo,
        monthlyIncome: state.monthlyIncome,
        availableBalance: state.availableBalance,
        salaryDate: state.salaryDate
      });
      if(response.success){
        handleNext();
      }
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Work Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="company"
            label="Company Name"
            helperText="company full name"
            fullWidth
            autoComplete="company name"
            value={state.workInfo.company}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  company: e.target.value
                }
              })
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="country"
            label="Country"
            helperText="company located country"
            fullWidth
            autoComplete="company-location-country"
            value={state.workInfo.location.country}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  location:{
                    ...state.workInfo.location,
                    country: e.target.value
                  }
                }
              })
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="state"
            label="State"
            helperText="company located state"
            fullWidth
            autoComplete="company-location-state"
            value={state.workInfo.location.state}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  location:{
                    ...state.workInfo.location,
                    state: e.target.value
                  }
                }
              })
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="city"
            label="City"
            helperText="company located city"
            fullWidth
            autoComplete="company-location-city"
            value={state.workInfo.location.city}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  location:{
                    ...state.workInfo.location,
                    city: e.target.value
                  }
                }
              })
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="area"
            label="Area"
            helperText="company location area"
            fullWidth
            autoComplete="company-location-area"
            value={state.workInfo.location.area}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  location:{
                    ...state.workInfo.location,
                    area: e.target.value
                  }
                }
              })
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="pincode"
            label="Pincode"
            helperText="company located postal code"
            fullWidth
            autoComplete="compnay-location-pincode"
            value={state.workInfo.location.pincode}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  location:{
                    ...state.workInfo.location,
                    pincode: e.target.value
                  }
                }
              })
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="department"
            label="Department"
            helperText="department name"
            fullWidth
            autoComplete="department"
            value={state.workInfo.department}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  department: e.target.value
                }
              })
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="designation"
            label="Designation"
            helperText="designation name"
            fullWidth
            autoComplete="designation"
            value={state.workInfo.designation}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  designation: e.target.value
                }
              })
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="role"
            label="Role"
            helperText="role name"
            fullWidth
            autoComplete="role"
            value={state.workInfo.role}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  role: e.target.value
                }
              })
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom style={{float: 'left'}}>
        Joined-At
      </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom style={{float: 'left'}}>
        Salary Date
      </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            required
            id="joinedAt"
            label="Joined At"
            type={"date"}
            fullWidth
            autoComplete="joined-At"
            value={state.workInfo.joinedAt}
            onChange={(e)=>{
              setState({
                ...state,
                workInfo: {
                  ...state.workInfo,
                  joinedAt: e.target.value
                }
              })
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            options={[
              { value: "01", label: "01" },
              { value: "02", label: "02" },
              { value: "03", label: "03" },
              { value: "04", label: "04" },
              { value: "05", label: "05" },
              { value: "06", label: "06" },
              { value: "07", label: "07" },
              { value: "08", label: "08" },
              { value: "09", label: "09" },
              { value: "10", label: "10" },
              { value: "11", label: "11" },
              { value: "12", label: "12" },
              { value: "13", label: "13" },
              { value: "14", label: "14" },
              { value: "15", label: "15" },
              { value: "16", label: "16" },
              { value: "17", label: "17" },
              { value: "18", label: "18" },
              { value: "19", label: "19" },
              { value: "20", label: "20" },
              { value: "21", label: "21" },
              { value: "22", label: "22" },
              { value: "23", label: "23" },
              { value: "24", label: "24" },
              { value: "25", label: "25" },
              { value: "26", label: "26" },
              { value: "27", label: "27" },
              { value: "28", label: "28" },
              { value: "29", label: "29" },
              { value: "30", label: "30" },
            ]}
            value={{key:state.salaryDate?state.salaryDate:1, label: state.salaryDate?state.salaryDate:1}}
            onChange={(e)=>{
              setState({
                ...state,
                salaryDate: e.value
              })
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="salary"
            label="Salary"
            helperText="monthly income"
            fullWidth
            autoComplete="salary"
            value={state.monthlyIncome}
            onChange={(e)=>{
              setState({
                ...state,
                monthlyIncome: e.target.value
              })
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="balance"
            label="Available balance"
            helperText="available amount"
            fullWidth
            autoComplete="balance"
            value={state.availableBalance}
            onChange={(e)=>{
              setState({
                ...state,
                availableBalance: e.target.value
              })
            }}
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button onClick={handleBack} className={classes.button}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={()=>{
            setSetup({...setup, ...state})
            workUpdate();
            console.log(state);
            }}
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}
