import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Button from "../../components/CustomButtons/Button.js";
import Grid from "@material-ui/core/Grid";
import {
  createRegular,
  getRegular,
  updateRegular,
} from "../../../../Services/APIservices.js";
import Select from "react-select";
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

export default function Typographys() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [regular, setRegular] = useState([]);
  const [state, setState] = useState({
    name: "",
    expectAmount: "",
    products: "",
    date: "",
    description: "",
  });

  const regularCreate = async () => {
    let response;
    try {
      if (state.id) {
        response = await updateRegular({
          ...state,
          id: state._id,
          products: state.products.split(" "),
        });
      } else {
        response = await createRegular({
          ...state,
          products: state.products.split(" "),
        });
      }
      if (response.success) {
        setShow(false);
        getAllRegular();
        setState({
          name: "",
          expectAmount: "",
          products: "",
          date: "",
          description: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllRegular();
  }, []);

  const getAllRegular = async () => {
    let response;
    try {
      response = await getRegular();
      if (response.success) {
        let datas = [];
        for (let index = 0; index < response.data.length; index++) {
          let data = response.data[index];
          let products = "";
          data.products.map((x) => {
            if (products === "") {
              products = x;
            } else {
              products = `${products}, ${x}`;
            }
            return null;
          });
          datas.push([
            `${index + 1}`,
            `${data.name}`,
            products,
            `${data.date}`,
            `${data.expectAmount}`,
            `${data.description}`,
            <Edit
              onClick={() => {
                setState({
                  products: products,
                  name: data.name,
                  expectAmount: data.expectAmount,
                  date: data.date,
                  description: data.description,
                  id: data._id,
                });
                setShow(true);
              }}
            />,
          ]);
        }

        setRegular(datas);
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
              Add Regular
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Regular Name"
                  fullWidth
                  autoComplete="Regular name"
                  value={state.name}
                  onChange={(e) => {
                    setState({ ...state, name: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="amount"
                  name="amount"
                  label="Expected Amount"
                  fullWidth
                  autoComplete="amount"
                  value={`${state.expectAmount}`}
                  onChange={(e) => {
                    setState({
                      ...state,
                      expectAmount: parseInt(e.target.value),
                    });
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
                  value={state.products}
                  onChange={(e) => {
                    setState({ ...state, products: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={
                    state.date !== ""
                      ? {
                          key: state.date,
                          label: state.date,
                        }
                      : ""
                  }
                  placeholder={"select date"}
                  onChange={(e) => {
                    setState({
                      ...state,
                      date: e.value,
                    });
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
                  value={state.description}
                  onChange={(e) => {
                    setState({ ...state, description: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={regularCreate}
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
                <h4 className={classes.cardTitleWhite}>Your Regulars</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a details of Regulars
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "S No",
                    "Name",
                    "Products",
                    "Date",
                    "Expecting Amount",
                    "Description",
                  ]}
                  tableData={regular}
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
              Add Regular
            </Button>
          </GridItem>
        </React.Fragment>
      )}
    </GridContainer>
  );
}
