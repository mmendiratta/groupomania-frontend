import { Container, TextField, Button } from '@mui/material';
import { Form, useFormikContext } from 'formik';
import { useState } from "react";

export function CreatePostForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const {
        values,
        handleSubmit,
        handleChange,
        setFieldValue,
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
                    variant="outlined"
                    component="label"
                >
                    {selectedFile ? "Upload File" : "Uploaded"}
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={(event) => {
                            setSelectedFile(event.target.files[0]);
                            setFieldValue("file", event.target.files[0]);
                        }}
                        hidden
                    />
                </Button>
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