import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, CssBaseline, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';

import Logo from '../img/logo_teste.png';

const drawerWidth = 240;

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Reset global de CSS */}
      <CssBaseline />

      {/* Cabeçalho (Header) */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={ open ? handleDrawerClose : handleDrawerOpen }
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            component='img'
            sx={{ height: 40, mr: 2, ml: 5 }}
            alt='Logomarca'
            src={Logo}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer (Navbar) */}
      <Drawer
        sx={{
            paddingTop: '64px',
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', top: '64px' },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
        <List>
        {['Dashboard', 'Sistema de Gestão', 'Parâmetros'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    (text === 'Dashboard' && <HomeIcon />) ||
                    (text === 'Sistema de Gestão' && <LayersIcon />) ||
                    (text === 'Parâmetros' && <SettingsIcon />)
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>


      {/* Espaço reservado para o Conteúdo das páginas*/}
      <Box sx={{ 
        mt: '64px', 
        flexGrow: 1,
        transition: 'width 0.3s ease',
        width: open ? `calc(100% - ${drawerWidth}px)` : '100%' // Ajusta a largura com base no estado do Drawer
        }} >
        {children}
        Conteúdo da página
      </Box>
    </Box>
  );
}