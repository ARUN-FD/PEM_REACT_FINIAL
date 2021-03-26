import React, { useContext, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Typography from "@material-ui/core/Typography";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Button from "../../components/CustomButtons/Button.js";
import Grid from "@material-ui/core/Grid";
import {
  getSalary,
  salaryCreate,
  salaryUpdate,
} from "../../../../Services/APIservices.js";
import { GlobalContext } from "../../../../Services/GlobalContext/GlobalContext";
import { Edit } from "@material-ui/icons";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles((theme) => ({
  ...styles,
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export default function Salary() {
  const classes = useStyles();
  const [State, setState] = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [salary, setSalary] = useState([]);
  const [value, setValue] = useState({
    name:"", date:"", deposited:0
  });

  const createSalary = async () => {
    let response, balance;
    try {
      if (value.id) {
        balance = State.availableBalance - value.before + value.amount;
        response = await salaryUpdate(value);
      } else {
        balance = State.availableBalance + value.amount;
        response = await salaryCreate(value);
      }
      if (response.success) {
        setShow(false);
        setState({ ...State, availableBalance: balance });
        setValue({ name:"", date:"", deposited:0 });
        getAllSalary();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllSalary();
  }, []);

  const getAllSalary = async () => {
    let response;
    try {
      response = await getSalary();
      if (response.success) {
        let datas = [];
        for (let index = 0; index < response.data.length; index++) {
          let data = response.data[index];
          datas.push([
            `${index + 1}`,
            `${data.name}`,
            `${data.date}`,
            `${data.deposited}`,
            `${data.balance}`,
            `${data.workInfo.company}`,
            <Edit
              onClick={() => {
                setValue({
                  name: data.name,
                  date: data.date,
                  deposited: data.deposited,
                  id: data._id
                });
                setShow(true);
              }}
            />,
          ]);
        }
        setSalary(datas);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GridContainer>
      {show ? (
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Add Income
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Salary Name"
                  fullWidth
                  autoComplete="salary name"
                  value={value.name}
                  onChange={(e) => {
                    setValue({ ...value, name: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="deposited"
                  name="deposited"
                  label="Income Amount"
                  fullWidth
                  autoComplete="amount"
                  value={`${value.deposited}`}
                  onChange={(e) => {
                    setValue({ ...value, deposited: parseInt(e.target.value) });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type={"date"}
                  id="date"
                  name="date"
                  label="Date"
                  fullWidth
                  autoComplete="date"
                  value={value.date}
                  onChange={(e) => {
                    setValue({ ...value, date: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={createSalary}
                  className={classes.button}
                >
                  Save
                </Button>
              </div>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setShow(false);
                  }}
                  className={classes.button}
                >
                  Cancel
                </Button>
              </div>
            </React.Fragment>
          </Paper>
        </main>
      ) : (
        <React.Fragment>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Your Incomes</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a details of Incomes
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "S.No",
                    "Name",
                    "Date",
                    "Income Amount",
                    "Balance",
                  ]}
                  tableData={salary}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12}>
            <Button
              color={"primary"}
              onClick={() => {
                setShow(true);
              }}
            >
              Add Income
            </Button>
          </GridItem>
        </React.Fragment>
      )}
    </GridContainer>
  );
}
