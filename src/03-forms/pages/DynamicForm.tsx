import { Form, Formik } from "formik";
import formJson from "../data/custom-form.json";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredlFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(rule.value || 2, `Minimo de ${rule.value || 2}`);
    }
    if (rule.type === "email") {
      schema = schema.email("Formato incorrecto");
    }
  }

  requiredlFields[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredlFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              } else if (type === "check") {
                return <MyCheckbox key={name} label={label} name={name} />;
              } else {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
            })}

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
