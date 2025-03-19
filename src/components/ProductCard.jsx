import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <Card
      sx={{
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.03)' } // Subtle hover effect
      }}
    >
      {/* Product Image */}
      <CardMedia
    component="img"
    height="450"  // Increased height for a portrait-style look
    image={product.img}
    alt={product.name}
    sx={{
        objectFit: 'cover',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        maxWidth: '250px',   // Reduced width for a vertical image effect
        margin: '0 auto'     // Centers the image horizontally
    }}
/>


      {/* Product Details */}
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.price}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{
              width: '100%'
            }}
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </Button>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<BoltIcon />}
            sx={{
              width: '100%'
            }}
            onClick={() => onBuyNow(product.id)}
          >
            Buy Now
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductCard;
