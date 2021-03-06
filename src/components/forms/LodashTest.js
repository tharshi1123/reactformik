import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputField from "../core/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../core/Button";
const useStyles = makeStyles((theme) =>
  createStyles({
    formCart: {
      maxWidth: "430px",
      width: "100%",
    },
  })
);
const LodashTest = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      const { getFormValue } = props;
      if (getFormValue) {
        getFormValue(values);
      }
      formik.setFieldValue("email", '')
      formik.setFieldTouched("email", false)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          // ref={(c) => this.title = c}
          id={"email"}
          name={"email"}
          type={"email"}
          label={"Email address"}
          placeholder={"Enter email address"}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue("email", vaule)}
          onBlur={() => formik.setFieldTouched("email")}
        />
      </Grid>
      <Buttons color="primary">Add Email</Buttons>
    </form>
  );
};
export default LodashTest;