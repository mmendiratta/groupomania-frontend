import { Fragment, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { Formik } from "formik";
import { CreatePostForm } from "./CreatePostForm";
import { createNewPost } from "../../../services/feedApi";
import { queryClient } from "../../../App";

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
    // const queryClient = QueryClient();

    const handleModalState = () => {
        setModalOpen(preVal => !preVal)
    }

    const handleSubmit = (values) => {
        createNewPost(values);
        handleModalState();
        queryClient.invalidateQueries("getFeed");
    }

    return (
        <Fragment>
            <Button onClick={() => { handleModalState() }}>Create Post</Button>
            <Formik initialValues={{ title: "", body: "", file: null }} onSubmit={handleSubmit}>
                <Modal
                    open={modalOpen}
                    onClose={() => { handleModalState() }}
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