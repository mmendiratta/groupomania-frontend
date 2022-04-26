import { Formik } from 'formik';
import CreateAccount from './CreateAccount';
import * as yup from 'yup';
import { signup } from '../../../services/accountsApi';

export default function CreateAccountFormik () {
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
    return (
        <Formik initialValues={{firstName: "", lastName: "", email: "", password: ""}} validationSchema={validationSchema} onSubmit={signup}>
            <CreateAccount />
        </Formik>
    )
}