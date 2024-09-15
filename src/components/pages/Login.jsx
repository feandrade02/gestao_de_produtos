import React from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

import Logo from '../../img/logo_teste.png'

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
        navigate('/paginabase');
      };

    return(
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box 
            sx={{ 
              height: '100vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            <Paper 
              elevation={6} 
              sx={{ 
                padding: '20px', 
                maxWidth: '600px', 
                width: '100%' 
              }}
            >
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
                        mb: 2 
                    }}
                    alt='Logomarca'
                    src={Logo}
                />
                <Typography component="h1" variant="h5">
                  Catálogo de Produtos
                </Typography>
                <Box 
                  component="form" 
                  noValidate 
                  onSubmit={handleSubmit} 
                  sx={{ 
                    mt: 1, 
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                  }}>
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
                      startIcon={<LoginIcon />}
                      sx={{
                        mt: 3, 
                        mb: 2,
                        mx: 'auto' 
                      }}
                    >
                      Login
                    </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ThemeProvider>
    )
}
