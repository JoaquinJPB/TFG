import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PersonIcon from '@mui/icons-material/Person';

import background from '../images/Wallpaper_Website.png'

const theme = createTheme();

const SignUp = () =>  {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="false" className='main-sign-up' 
            sx={{
                height: '100vh',
                overflow: 'disable',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor:'rgba(0,0,0,0.1)',
                backgroundSize: 'cover',
                }}
                
            >
                <Container component="section" maxWidth="xs" className='sign-in'>
                    <CssBaseline />
                    <Box
                    sx={{
                        paddingTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <PersonIcon 
                        sx={
                            {   
                                fontSize: '2.5rem',
                                color: 'white'
                    }} className="sign-icons">
                        <LockOutlinedIcon />
                    </PersonIcon>
                    <Typography component="h1" variant="h5" sx={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            sx={
                                {   
                                    backgroundColor: 'white',
                                    color: 'black'
                            }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            sx={
                                {   
                                    backgroundColor: 'white',
                                    color: 'black'
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            sx={
                                {   
                                    backgroundColor: 'white',
                                    color: 'black'
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            sx={
                                {   
                                    backgroundColor: 'white',
                                    color: 'black',
                            }}
                            />
                        </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 , backgroundColor: 'var(--secondaryColor)', fontWeight: 'bold', fontSize: '1.25rem' ,
                        '&:hover': {
                            backgroundColor: 'var(--primaryColor)',
                        }
                        }}
                        >
                        Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2" sx={{color: 'white', textDecorationColor: 'white'}} >
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </Box>
                    </Container>
            </Container>

        </ThemeProvider>
    );
}

export default SignUp