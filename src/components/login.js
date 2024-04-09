import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, ThemeProvider, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AnimatedBackground from './AnimatedBackground'
import axios from 'axios';

const defaultTheme = createTheme();

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginErrors, setLoginErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length > 0; // Simple check, adjust based on your requirements

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [name]: value,
    }));
    setLoginErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    if (!validateEmail(loginData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!validatePassword(loginData.password)) {
      errors.password = 'Password cannot be empty.';
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:6061/loanApp/customer/login', loginData);
      console.log('Login successful', response.data);
      // Handle successful login here (e.g., redirect to dashboard)
    } catch (error) {
      console.error('Login error:', error.response?.data || 'Error');
      // Handle login error here (e.g., show error message)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}><br></br><br></br>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginData.email}
              onChange={handleChange}
              error={!!loginErrors.email}
              helperText={loginErrors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginData.password}
              onChange={handleChange}
              error={!!loginErrors.password}
              helperText={loginErrors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href
               ="#" variant="body2">
               Forgot password?
             </Link>
           </Grid>
           <Grid item>
             <Link href="#" variant="body2">
               {"Don't have an account? Sign Up"}
             </Link>
           </Grid>
         </Grid>
       </Box>
     </Box>
     <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
       {'Copyright © '}
       <Link color="inherit" href="https://mui.com/">
         Your Website
       </Link>
       {' '}
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   </Container>
 </ThemeProvider>
);
}
