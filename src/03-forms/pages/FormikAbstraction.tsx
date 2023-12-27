import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(16, "Debe de tener 16 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Formato incorrecto").required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "It Jr. no puede ser")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="JuanCa"
            />
            <MyTextInput label="Last Name" name="lastName" placeholder="Netz" />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="jcnetz@hotmail.com"
              type="email"
            />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Jr.</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
