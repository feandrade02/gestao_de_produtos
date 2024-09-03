import React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid2, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Logo from '../../img/logo_teste.png'

const theme = createTheme();

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return(
        <ThemeProvider theme={theme}>
        <Grid2 container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid2 item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box 
                component='img'
                sx={{
                    height: 100,
                    mb: 2,
                }}
                alt='Logomarca'
                src={Logo}
            />
            <Typography component="h1" variant="h5">
              Catálogo de Produtos
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usuário"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </ThemeProvider>
    )
}
