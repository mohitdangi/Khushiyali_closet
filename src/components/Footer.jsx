import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: '#fff',
        py: 4,
        px: 2,
        textAlign: 'center'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Girl Clothing Store</Typography>
          <Typography variant="body2">
            High-quality fashion for every occasion.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="/" color="inherit" sx={{ display: 'block' }}>Home</Link>
          <Link href="/category/traditional" color="inherit" sx={{ display: 'block' }}>Traditional Wear</Link>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">Follow Us</Typography>
          <Box>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mt: 3 }}>
        © {new Date().getFullYear()} Girl Clothing Store. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
