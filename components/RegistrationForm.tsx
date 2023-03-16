// components/RegistrationForm.tsx
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { object, string, ref } from "yup";
import CustomField from "./CustomField";
const registrationSchema = object({
  email: string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: string()
    .required("Password is required")
    .min(8, "Password should have a minimum of 8 characters")
    .matches(/[A-Z]/, "It should contain at least 1 uppercase character")
    .matches(/[a-z]/, "It should contain at least 1 lowercase character")
    .matches(/[1-9]/, "It should contain at least 1 digit"),
  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Password does not match"),
  phone: string().optional(),
});

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };
  // Formik onSubmit handler
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className="card shadow-lg bg-base-200 ">
        <div className="card-body">
          <h1 className="text-3xl font-bold my-8 text-center">
            Create an Account
          </h1>
          <div className="flex flex-col gap-2">
            <CustomField name="email" placeholder="Email" />
            <CustomField
              name="password"
              placeholder="Password"
              type="password"
            />
            <CustomField
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
            <CustomField name="phone" placeholder="Phone" />
          </div>
          <div className="flex justify-between gap-4 my-4">
            {/* Very important to have type="submit" to trigger the Formik's onSubmit callback */}
            <button className="btn btn-accent flex-grow" type="submit">
              Create Account
            </button>
            <Link
              href="/sign-in"
              className="btn btn-accent btn-outline flex-grow"
            >
              Sign In
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
