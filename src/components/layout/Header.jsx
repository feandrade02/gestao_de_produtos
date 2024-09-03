import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../img/logo_teste.png'

export default function Header() {
    return(
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box 
          component='img'
          sx={{
            height: 40,
            mr: 2,
            ml: 5,
          }}
          alt='Logomarca'
          src={Logo}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    )
}