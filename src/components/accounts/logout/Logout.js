import { Fragment } from "react";
import { Button } from "@mui/material";
import { removeUser } from "../../../config";
import { useNavigate } from "react-router-dom";


export default function Logout() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        removeUser();
        navigate("/login")
    }

    return (
        <Fragment>
            <Button onClick={() => { handleSubmit() }} >
                Logout
            </Button>
        </Fragment>

    )
}