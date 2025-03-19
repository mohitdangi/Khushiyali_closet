import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // ✅ For Hamburger Icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>

        {/* Logo / Home */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
        >
          Girl Clothing Store
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button color="inherit" component={Link} to="/category/traditional">
            Traditional
          </Button>
          <Button color="inherit" component={Link} to="/category/western">
            Western
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Box>

        {/* Search Bar (Responsive) */}
        <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              backgroundColor: '#fff',
              borderRadius: '4px',
              width: { xs: '150px', sm: '200px', md: '250px' }
            }}
          />
        </Box>

        {/* Hamburger Icon (For Mobile) */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { md: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Menu
          </Typography>
          <Divider />

          <List>
            <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/category/traditional" onClick={handleDrawerToggle}>
              <ListItemText primary="Traditional" />
            </ListItem>
            <ListItem button component={Link} to="/category/western" onClick={handleDrawerToggle}>
              <ListItemText primary="Western" />
            </ListItem>
            <ListItem button component={Link} to="/cart" onClick={handleDrawerToggle}>
              <ListItemText primary="Cart" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
