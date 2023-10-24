import { useState } from "react";

import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    Typography
} from "@mui/material";
import { LockOutlined } from '@mui/icons-material';

import { FormLogin } from "./FormLogin.jsx";
import { TransitionMessage } from "../../../shared/components/transitionMessage/TransitionMessage.jsx";

export const Login = () => {
    const [openTransitionMessage, setOpenTransitionMessage] = useState(false);
    const [messageTransitionMessage, setMessageTransitionMessage] = useState('');
    const [severityTransitionMessage, setSeverityTransitionMessage] = useState('success');

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{
                        mt: 2,
                        bgcolor: 'secondary.main'
                    }}>
                        <LockOutlined />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>

                    <FormLogin
                        setOpenTransitionMessage={setOpenTransitionMessage}
                        setMessageTransitionMessage={setMessageTransitionMessage}
                        setSeverityTransitionMessage={setSeverityTransitionMessage}
                    />

                    <TransitionMessage
                        message={messageTransitionMessage}
                        open={openTransitionMessage}
                        setOpen={setOpenTransitionMessage}
                        severity={severityTransitionMessage} // error, warning, info, success
                    />
                </Box>
            </Container>
    );
}