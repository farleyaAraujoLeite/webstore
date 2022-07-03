//import react
import React from 'react';
//import material
import { Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';




//Import css
import "../login/login.css";

const Login = () => {

    return(
        <>
            
            <div id="box-login">
                <div id='logo'>
                    <img src="/public/saborDoNorte.jpg" alt="logo" width={200} />
                </div>
                <Grid id="field-login">
                    <form action="" id="fields">
                        <div id="field-email">
                        <TextField
                            id="outlined-helperText"
                            label="Email"
                            variant="outlined"
                        />                            
                        </div>
                        <div id="field-password">
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />                            
                        </div>
                        <div id="btn-login">
                            <Button variant="contained" color="primary">
                                login
                            </Button>
                        </div>                        

                    </form>
                </Grid>
            </div>
        </>
    )
}

export default Login;