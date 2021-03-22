import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import avatar from "../../assets/img/faces/marc.jpg";
import { GlobalContext } from "../../../../Services/GlobalContext/GlobalContext.js";
import { useHistory } from "react-router";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [State, setState] = useContext(GlobalContext);
  const History = useHistory();
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                {/* <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem> */}
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Firstname"
                    id="firstname"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: State.firstName,
                      onChange: (e) => {setState({...State, firstName: e.target.value})}
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Lastname"
                    id="lastname"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: State.lastName,
                      onChange: (e) => {setState({...State, lastName: e.target.value})}
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: State.email
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Phone"
                    id="phone"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: State.phone
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
              <Button color="primary" onClick={()=> History.push("/checkOut")}>Update More Details</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4
                style={{ textTransform: "capitalize" }}
                className={classes.cardTitle}
              >
                {State.firstName} {State.lastName}
                {"("}
                {State.userType}
                {")"}
              </h4>
              <p className={classes.description}>
                {"+91 "}
                {State.phone}
                {" - "}
                {State.email}
              </p>
              <h6 className={classes.cardCategory}>
                {State.workInfo.role}, {State.workInfo.designation},{" "}
                {State.workInfo.department}
              </h6>
              <p className={classes.description}>
                <b>{State.workInfo.company}</b>
                {" ("}
                {State.workInfo.location.area},{"  "}
                {State.workInfo.location.city}, {State.workInfo.location.state},{" "}
                {State.workInfo.location.country}
                {"-"}
                {State.workInfo.location.pincode}
                {")"}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
