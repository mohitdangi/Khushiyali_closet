import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const FeatureSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      <Grid container spacing={4} alignItems="center">

        {/* Left Side - Video */}
        <Grid item xs={12} md={6}>
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            loop
            muted
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          />
        </Grid>

        {/* Right Side - Description */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 'bold'
            }}
          >
            Why Choose Our Clothing?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: 'text.secondary',
              lineHeight: 1.6
            }}
          >
            Our clothing is crafted from top-quality materials imported from the finest suppliers.  
            Experience comfort, durability, and style — perfect for every occasion.
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ color: 'primary.dark' }}>
              ✅ Premium Fabrics  
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.dark' }}>
              ✅ Skin-Friendly Material  
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.dark' }}>
              ✅ Durable Stitching  
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.dark' }}>
              ✅ Trendy Designs
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: 'none', px: 4, py: 1 }}
          >
            Explore Our Collection
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;
