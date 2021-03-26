import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/ExitToApp";
// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { useHistory } from "react-router";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  const Historys = useHistory();
  return (
    <div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={null}
          aria-haspopup="true"
          onClick={() => {
            localStorage.removeItem("token");
            Historys.push("/login");
          }}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>LogOut</p>
          </Hidden>
        </Button>
      </div>
    </div>
  );
}
