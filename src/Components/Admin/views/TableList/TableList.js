import React, { useContext, useState } from "react";
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
import { createExpense } from "../../../../Services/APIservices.js";
import {GlobalContext} from '../../../../Services/GlobalContext/GlobalContext';

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
    width: '100%'
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

export default function TableList() {
  const classes = useStyles();
  const [State, setState] = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name:"",
    amount:"",
    balance:"",
    available:"",
    expenseType:"REGULAR",
    products:"",
    where:{
      name: "",
      location: {
        city: "",
        area: ""
      }
    },
    description: ""
  });

  const expenseCreate = async() => {
    let response;
    let balance = State.availableBalance - value.amount;
    try{
      response = await createExpense({...value, products: value.products.split(" "), balance: balance, available: balance});
      if(response.success){
        setShow(false);
        setState({...State, availableBalance: balance});
      }
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <GridContainer>
      {show ? (
        <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Add Expenses
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Expense Name"
                fullWidth
                autoComplete="expense name"
                value={value.name}
                onChange={(e) => {
                  setValue({ ...value, name: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="amount"
                name="amount"
                label="Amount"
                fullWidth
                autoComplete="amount"
                value={`${value.amount}`}
                onChange={(e) => {
                  setValue({ ...value, amount: parseInt(e.target.value) });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="products"
                name="products"
                label="Products"
                fullWidth
                autoComplete="products-name"
                value={value.products}
                onChange={(e) => {
                  setValue({ ...value, products: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="storeName"
                name="storeName"
                label="Store Name"
                fullWidth
                autoComplete="store-name"
                value={value.where.name}
                onChange={(e) => {
                  setValue({ ...value, where: { ...value.where, name: e.target.value } });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City (Store Location)"
                fullWidth
                autoComplete="city-name"
                value={value.where.location.city}
                onChange={(e) => {
                  setValue({ ...value, where: {...value.where, location: { ... value.where.location, city: e.target.value}} });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="area"
                name="area"
                label="Area (Store Location)"
                fullWidth
                autoComplete="area"
                value={value.where.location.area}
                onChange={(e) => {
                  setValue({ ...value, where: {...value.where, location: { ... value.where.location, area: e.target.value}} });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="description"
                value={value.description}
                onChange={(e) => {
                  setValue({ ...value, description: e.target.value });
                }}
              />
            </Grid>
          </Grid>
          <React.Fragment>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={expenseCreate}
                className={classes.button}
              >
                Save
              </Button>
            </div>
            <div className={classes.buttons}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {setShow(false)}}
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
                <h4 className={classes.cardTitleWhite}>Your Expenses</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a details of Expenses
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Country", "City", "Salary"]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                    [
                      "Philip Chaney",
                      "Korea, South",
                      "Overland Park",
                      "$38,735",
                    ],
                    [
                      "Doris Greene",
                      "Malawi",
                      "Feldkirchen in Kärnten",
                      "$63,542",
                    ],
                    ["Mason Porter", "Chile", "Gloucester", "$78,615"],
                  ]}
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
              Add Expense
            </Button>
          </GridItem>
        </React.Fragment>
      )}
    </GridContainer>
  );
}
