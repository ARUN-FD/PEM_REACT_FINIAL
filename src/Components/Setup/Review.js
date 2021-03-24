import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { SetupContext, SetUpContext } from '../../Services/setUpContext/setUpContext';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(1),
  },
}));

export default function Review({handleBack}) {
  const classes = useStyles();
  const [setup,setSetup] = useContext(SetupContext);
  const History = useHistory();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Person Info Summary
      </Typography>
      <Grid item xs={12}>
        <Typography variant={"subtitle1"} style={{float: 'left'}}>
          <b>Address Details</b>
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{textAlign: 'left'}}>
          <Typography gutterBottom>{setup.address.area}</Typography>
          <Typography gutterBottom>{setup.address.area}, {setup.address.city}, {setup.address.state}, {setup.address.country}, {setup.address.pincode}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"subtitle1"} style={{float: 'left'}}>
          <b>Qualification Details</b>
        </Typography>
      </Grid>
      <List disablePadding>
        {setup.qualification.map((setup,i) => (
          <ListItem className={classes.listItem} key={i}>
            <ListItemText primary={setup.deg} secondary={setup.completedAt} />
            <Typography variant="body2">{setup.passOut}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid item xs={12}>
        <Typography variant={"subtitle1"} style={{float: 'left'}}>
          <b>Work Details</b>
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{textAlign: 'left'}}>
          <Typography variant="subtitle2" gutterBottom className={classes.title}>
            Company Details
          </Typography>
          <Typography gutterBottom>{setup.workInfo.company}</Typography>
          <Typography gutterBottom>{setup.workInfo.location.area}, {setup.workInfo.location.city}, {setup.workInfo.location.state}, {setup.workInfo.location.country}, {setup.workInfo.location.pincode}</Typography>
          <Typography gutterBottom>{setup.workInfo.department} - {setup.workInfo.designation}</Typography>
          <Typography gutterBottom>{setup.workInfo.role}</Typography>
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button onClick={handleBack} className={classes.button}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={()=>{ History.push("/user/dashboard") }}
          className={classes.button}
        >
          Finish Setup
        </Button>
      </div>
    </React.Fragment>
  );
}