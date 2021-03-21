import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fields from "./Fields";
import { SetupContext } from "../../Services/setUpContext/setUpContext";
import { qualificationFun } from "../../Services/APIservices";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
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

const QualificationForm = ({handleNext,handleBack}) => {
  const classes = useStyles();
  const [setup,setSetup] = useContext(SetupContext);
  const [state, setState] = useState(setup.qualification);
  const [count, setCount] = useState(setup.count);

  const qualificationUpdate = async() => {
    let response;
    try{
      response = await qualificationFun(state);
      if(response.success){
        handleNext();
      }
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    console.log(count,"count")
  },[count]);

  const removeValue = (i) => {
    setState(state.filter((x,j)=>{ return j !== i }))
    setCount(count.filter((x,k)=>{ return k !== (count.length-1)}));
  }

  return (
    <React.Fragment>
      {count.map((x) => (
        <span key={x}>
          <Fields data={state} setValues={(rValue) => setState(rValue)} remove={removeValue} i={x} />
        </span>
      ))}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => {
          setCount([...count, count.length]);
          setState([
            ...state,
            { deg: "", passOut: "", completedAt: "", id: state.length - 1 },
          ]);
        }}
      >
        + Add Qualification
      </Button>

      <div className={classes.buttons}>
        <Button onClick={handleBack} className={classes.button}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={()=>{
            setSetup({...setup, qualification: state, count: count});
            qualificationUpdate();
          }}
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}

export default QualificationForm;