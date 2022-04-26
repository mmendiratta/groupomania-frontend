import { Container, TextField, Button } from '@mui/material';
import { Form, useFormikContext } from 'formik';

export default function Login() {
      const {
        values,
        handleSubmit,
        handleChange,
        touched,
        errors
      } = useFormikContext();

    return (
        <Form onSubmit={handleSubmit}>
            <Container maxWidth="xs">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Container>
        </Form>
    )
}