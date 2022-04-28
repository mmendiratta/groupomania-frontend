import { ErrorMessage, Formik } from 'formik';
import CreateAccount from './CreateAccount';
import * as yup from 'yup';
import { signup } from '../../../services/accountsApi';
import { useNavigate } from 'react-router-dom';

export default function CreateAccountFormik() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your first name')
      .required('First name is required'),
    lastName: yup
      .string('Enter your last name')
      .required('Last name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  async function handleSignup(values) {
    const success = await signup(values);
    if (!success) {
      return ErrorMessage("Incorrect Credentials");
    }
    navigate("/login")
  }

  return (
    <Formik initialValues={{ firstName: "", lastName: "", email: "", password: "" }} validationSchema={validationSchema} onSubmit={handleSignup}>
      <CreateAccount />
    </Formik>
  )
}