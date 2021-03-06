import React, { Component } from "react";
import PublicLayout from "../components/layouts/publicLayout";
import Complete from "../assets/images/Complete.png";
import failed from "../assets/icons/Failed.svg";
import UncompleteForm from "../components/messages/UncompleteForm";
import {withStyles} from "@material-ui/styles";

const styles = (theme) => ({
  logo: {
    width: "159px",
    height: "38px",
    border: "0",
    marginBottom: "50px",
  },
  cart: {
    maxWidth: "430px",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

class Uncompleted extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={Complete}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
          <img src={failed} alt="failed" className={classes.failed} />
          <UncompleteForm/>
        </div>
      </PublicLayout>
    )
  }
}

export default withStyles(styles)(Uncompleted);