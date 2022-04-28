import { Container, TextField, Button } from '@mui/material';
import { Form, useFormikContext } from 'formik';

export function CreatePostForm () {
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
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                    value={values.title}
                    onChange={handleChange}
                    error={touched.title && Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="body"
                    label="Post Body"
                    name="body"
                    multiline
                    rows={5}
                    value={values.body}
                    onChange={handleChange}
                    error={touched.body && Boolean(errors.body)}
                    helperText={touched.body && errors.body}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Create Post
                </Button>
            </Container>
        </Form>
    )
}