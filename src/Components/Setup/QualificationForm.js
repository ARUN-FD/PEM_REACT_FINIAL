import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function QualificationForm() {
  const classes = useStyles();
  const [state, setState] = useState([
    { deg: "", passOut: "", completedAt: "", id: 0 },
  ]);

  const renderField = () => {
    return state.map((x, index) => <Fields i={index} />);
  };
  
  const changeDesc = ( id, feild, value ) => {
    let projects = state;
    for (var i in projects) {
      if (projects[i].id === id) {
         projects[i][feild] = value;
         break; //Stop this loop, we found it!
      }
    }
    setState(projects);
    console.log(id, feild, value, projects[i].id);
    }

  const Fields = ({ i }) => {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Qualification Details {i + 1}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="deg"
              name="deg"
              label="Degree"
              fullWidth
              autoComplete="degree-name"
              value={state[i].deg}
              onChange={(e) =>{
                  let newArray = state;
                  newArray[i] = { ...newArray[i], deg: e.target.value }
                  console.log(newArray[i]);
                  setState(newArray);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="passOut"
              name="passOut"
              label="Passed Out"
              fullWidth
              autoComplete="passed-out"
              value={state[i].passOut}
              onChange={(e) => changeDesc(i, "passOut", e.target.value) }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="completedAt"
              name="completedAt"
              label="Completed At"
              fullWidth
              autoComplete="completed-at"
              value={state[i].completedAt}
              onChange={(e) => changeDesc(i, "completedAt", e.target.value) }
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {renderField()}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => {
          setState([...state, { deg: "", passOut: "", completedAt: "", id: (state.length) }]);
        }}
      >
        + Add Qualification
      </Button>
    </React.Fragment>
  );
}
