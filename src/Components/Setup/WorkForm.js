import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import Select from "react-select";

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
  const classes = useStyles();
  const dates = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="p" gutterBottom style={{float: 'left'}}>
        Joined-At
      </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="p" gutterBottom style={{float: 'left'}}>
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
          onClick={handleNext}
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}
