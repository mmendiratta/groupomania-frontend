import { Formik } from 'formik';
import Login from './Login';
import * as yup from 'yup';
import { login } from '../../../services/accountsApi';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { Button, Container } from '@mui/material';

export default function LoginFormik() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  async function handleLogin(values) {
    const success = await login(values);
    if (!success) {
      return console.log("Incorrect Credentials");
    }
    navigate("/home")
  }

  return (
    <Fragment>
      <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema} onSubmit={handleLogin} >
        <Login />
      </Formik>
      <Container maxWidth="xs">
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </Button>
      </Container>
    </Fragment>
  )
}