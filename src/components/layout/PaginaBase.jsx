import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Drawer, CssBaseline, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Typography, Tooltip, Avatar, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';


import Logo from '../../img/logo_teste.png';

const drawerWidth = 300;

const settings = ['Profile', 'Account', 'Logout'];

const menuItems = [
  { text: 'Dashboard', icon: <HomeIcon /> },
  {
    text: 'Sistema de Gestão',
    icon: <LayersIcon />,
    subItems: [
      { text: 'subItem1'},
      { text: 'subItem2'},
    ],
  },
  { 
    text: 'Parâmetros', 
    icon: <SettingsIcon />,
    subItems: [
      {text: 'Gestão de Campos', path: '/gestaocampos'}, //acrescentar paths depois
      {text: 'Informações de Mercadoria e Obrigatoriedade'},
      {text: 'Gestão de Fornecedores'},
      {text: 'Gestão de Usuários'},
    ],
  },
];

export default function PaginaBase({ children }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu();
    if (setting === 'Logout') {
      navigate('/');
    } else {
      console.log(`Clicked on ${setting}`);
    }
  };

  const handleSubMenuToggle = (text) => {
    setOpenSubMenu((prevState) => ({ ...prevState, [text]: !prevState[text] }));
  };

  const renderMenuItem = (item) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton onClick={() => item.subItems ? handleSubMenuToggle(item.text) : navigate(item.path)}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
        {item.subItems && (openSubMenu[item.text] ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
    </ListItem>
  );
  
  const renderSubItems = (subItems, parentText) => (
    <Collapse in={openSubMenu[parentText]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {subItems.map((subItem) => (
          <ListItemButton key={subItem.text} sx={{ pl: 4 }} onClick={() => navigate(subItem.path)}>
            <ListItemIcon sx={{ minWidth: '15px' }}>
              <CircleIcon sx={{ fontSize: 6 }} />
            </ListItemIcon>
            <ListItemText primary={subItem.text} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
            sx={{ height: 40, mr: 2, ml: 5 }}
            alt='Logomarca'
            src={Logo}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            top: '64px',
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.text}>
              {renderMenuItem(item)}
              {item.subItems && renderSubItems(item.subItems, item.text)}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          mt: '64px',
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}