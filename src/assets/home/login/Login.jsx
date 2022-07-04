//import react
import React, {useState} from 'react';
//import material
import { Grid, Switch } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';

//Import css
import "../login/login.css";

const Login = () => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const credentials = (data) => (evento) => {
    setUserCredentials({
      ...userCredentials, [data]:evento.target.value 
    });
  }  

  const handleLogin = () => {
    console.log(userCredentials);
  }

  return (
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
                value={userCredentials.email}
                onChange={credentials('email')}
              />
            </div>
            <div id="field-password">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={userCredentials.password}
                onChange={credentials('password')}
              />
            </div>
            <div id="btn-login">
              <Button variant="contained" color="primary" onClick={handleLogin} >
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