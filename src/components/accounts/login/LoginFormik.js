import { Formik } from 'formik';
import Login from './Login';
import * as yup from 'yup';
import { login } from '../../../services/accountsApi';

export default function LoginFormik () {
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
    return (

        <Formik initialValues={{email: "", password: ""}} validationSchema={validationSchema} onSubmit={login}>
            <Login />
        </Formik>

    )
}