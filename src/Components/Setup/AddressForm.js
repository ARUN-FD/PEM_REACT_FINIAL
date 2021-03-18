  
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  const [state, setState] = useState({
    address1: "",
    address2: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
  })
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
            onChange={(e)=>{setState({ ...state, address1: e.target.value })}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="address-line2"
            onChange={(e)=>{setState({ ...state, address2: e.target.value })}}
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
            onChange={(e)=>{setState({ ...state, area: e.target.value })}}
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
            onChange={(e)=>{setState({ ...state, city: e.target.value })}}
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
            onChange={(e)=>{setState({ ...state, state: e.target.value })}}
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
            onChange={(e)=>{setState({ ...state, country: e.target.value })}}
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
            onChange={(e)=>{setState({ ...state, pincode: e.target.value })}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}