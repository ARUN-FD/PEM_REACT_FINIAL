import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { SetupContext } from "../../Services/setUpContext/setUpContext";
import { addressFun } from '../../Services/APIservices';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function AddressForm({ handleNext }) {
  const classes = useStyles();
  const [setup, setSetup] = useContext(SetupContext);
  const [state, setState] = useState(setup.address);

  useEffect(()=>{
    setState(setup.address);
  },[setup])

  const addressUpdate = async() => {
    let response;
    try{
      response = await addressFun(state);
      if(response.success){
        handleNext();
      }
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
            value={state.address1}
            onChange={(e) => {
              setState({ ...state, address1: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
            value={state.address2 && state.address2}
            onChange={(e) => {
              setState({ ...state, address2: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="area"
            name="area"
            label="Area"
            fullWidth
            autoComplete="area-name"
            value={state.area && state.area}
            onChange={(e) => {
              setState({ ...state, area: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city-name"
            value={state.city && state.city}
            onChange={(e) => {
              setState({ ...state, city: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="state-name"
            value={state.state && state.state}
            onChange={(e) => {
              setState({ ...state, state: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country-name"
            value={state.country && state.country}
            onChange={(e) => {
              setState({ ...state, country: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pincode"
            name="pincode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="pincode"
            value={state.pincode && state.pincode}
            onChange={(e) => {
              setState({ ...state, pincode: e.target.value });
            }}
          />
        </Grid>
      </Grid>
      <React.Fragment>
        <div
          className={classes.buttons}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={()=> {
              addressUpdate();
              setSetup({...setup, address: state});
            }}
            className={classes.button}
          >Next</Button>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}
