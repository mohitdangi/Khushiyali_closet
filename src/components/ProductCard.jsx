import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <Card
      sx={{
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: { xs: '320px', md: '350px' }, // Compact height
        width: '100%', 
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.02)' } // Subtle hover effect
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"  // Reduced height for better balance
        image={product.img}
        alt={product.name}
        sx={{
          objectFit: 'cover',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        }}
      />

      {/* Product Details */}
      <CardContent sx={{ flexGrow: 1, p: 1, textAlign: 'center' }}>
        <Typography 
          variant="subtitle1" 
          sx={{ fontWeight: 'bold', color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.price}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ p: 1 }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{ width: '50%', fontSize: '0.8rem', p: 0.5 }}
            onClick={() => onAddToCart(product.id)}
          >
            Add
          </Button>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<BoltIcon />}
            sx={{ width: '50%', fontSize: '0.8rem', p: 0.5 }}
            onClick={() => onBuyNow(product.id)}
          >
            Buy
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductCard;
