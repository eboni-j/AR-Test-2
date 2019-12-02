import React from "react";

import Fab from "@material-ui/core/Fab";

import { useStyles } from "./styles";

const ButtonFixed = props => {
  const classes = useStyles();

  return props.type === "onClick" ? (
    <Fab
      variant="extended"
      size="medium"
      color="primary"
      className={classes.fixedButton}
      onClick={props.onClick}
    >
      {props.children}
      <span className={classes.text}>{props.text}</span>
    </Fab>
  ) : null;
};

export default ButtonFixed;
