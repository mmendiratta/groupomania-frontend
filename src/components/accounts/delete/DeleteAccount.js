import { Fragment, useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { deleteAccount } from "../../../services/accountsApi";
import { useNavigate } from "react-router-dom";

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

export default function DeleteAccount() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    // const queryClient = QueryClient();

    const handleModalState = () => {
        setModalOpen(preVal => !preVal)
    }

    const handleSubmit = () => {
        deleteAccount();
        handleModalState();
        navigate("/create-account")
    }

    return (
        <Fragment>
            <Button onClick={() => { handleModalState() }}>Delete Account</Button>
            <Modal
                open={modalOpen}
                onClose={() => { handleModalState() }}
                aria-labelledby="modal-modal-title-delete"
                aria-describedby="modal-modal-description-delete"
            >
                <Box sx={style}>
                    <Typography>
                        Are you sure you want to delete your account?
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => { handleSubmit() }}
                    >
                        Yes
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => { handleModalState() }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </Fragment >

    )
}