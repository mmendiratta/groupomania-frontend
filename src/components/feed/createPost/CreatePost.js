import { Fragment, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { Formik } from "formik";
import { CreatePostForm } from "./CreatePostForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreatePost() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <Fragment>
            <Button onClick={() => { setModalOpen(true) }}>Open modal</Button>
            <Formik initialValues={{ title: "", body: "" }}>
                <Modal
                    open={modalOpen}
                    onClose={() => { setModalOpen(false) }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreatePostForm />
                    </Box>
                </Modal>
            </Formik>
        </Fragment >
    )
}