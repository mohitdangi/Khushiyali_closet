import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";

const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg",
      name: "Elegant Dress",
      price: "$49.99",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/5886044/pexels-photo-5886044.jpeg",
      name: "Casual Jacket",
      price: "$59.99",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/6623873/pexels-photo-6623873.jpeg",
      name: "Trendy Top",
      price: "$29.99",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/6311463/pexels-photo-6311463.jpeg",
      name: "Denim Jeans",
      price: "$39.99",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/6311464/pexels-photo-6311464.jpeg",
      name: "Summer Shorts",
      price: "$19.99",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/6311461/pexels-photo-6311461.jpeg",
      name: "Winter Sweater",
      price: "$69.99",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/7679862/pexels-photo-7679862.jpeg",
      name: "Formal Suit",
      price: "$99.99",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg",
      name: "Cozy Hoodie",
      price: "$45.99",
    },
  ];
  
const NewArrivals = () => {
  const handleAddToCart = (id) => {
    console.log(`Product ${id} added to cart`);
  };

  const handleBuyNow = (id) => {
    console.log(`Product ${id} purchased directly`);
  };

  const handleShopMore = () => {
    console.log("Navigating to New Arrivals page...");
  };

  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: "#fff", textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        New Arrivals
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </Grid>
        ))}
      </Grid>

      {/* "Shop More" Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, px: 4, py: 1.5 }}
        onClick={handleShopMore}
      >
        Shop More
      </Button>
    </Box>
  );
};

export default NewArrivals;
