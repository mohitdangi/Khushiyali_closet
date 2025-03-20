import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  Radio,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import ProductCard from "../components/ProductCard";
import FilterSection from "../components/FilterSection";

const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg",
    name: "Alice cotton linen coord",
    price: "₹1,499.00",
    category: "New Arrival",
    color: "Blue",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/5886044/pexels-photo-5886044.jpeg",
    name: "Alysa cotton dress",
    price: "₹1,599.00",
    category: "New Arrival",
    color: "White",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6623873/pexels-photo-6623873.jpeg",
    name: "Alysa cutout top",
    price: "₹1,399.00",
    category: "New Arrival",
    color: "Yellow",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/6311463/pexels-photo-6311463.jpeg",
    name: "Amber coord set",
    price: "₹1,599.00",
    category: "New Arrival",
    color: "Beige",
  },
];

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);

  const handleFilterDrawerToggle = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  const handleSortDialogOpen = () => setIsSortDialogOpen(true);

  const handleSortDialogClose = () => setIsSortDialogOpen(false);

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesColor =
      selectedColor === "All" || product.color === selectedColor;
    const matchesSale = showSaleOnly ? product.sale : true;
    return matchesCategory && matchesColor && matchesSale;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-to-high") {
      return (
        parseFloat(a.price.replace(/[^\d.]/g, "")) -
        parseFloat(b.price.replace(/[^\d.]/g, ""))
      );
    } else if (sortBy === "price-high-to-low") {
      return (
        parseFloat(b.price.replace(/[^\d.]/g, "")) -
        parseFloat(a.price.replace(/[^\d.]/g, ""))
      );
    }
    return 0;
  });

  return (
    <Box sx={{ display: "flex", gap: 3, p: 3, flexWrap: "wrap" }}>
      {/* Filter Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isFilterDrawerOpen}
        onClose={handleFilterDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            p: 2,
          },
        }}
      >
        <FilterSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          showSaleOnly={showSaleOnly}
          setShowSaleOnly={setShowSaleOnly}
        />
      </Drawer>

      {/* Filter Section for Desktop */}
      <Box
        sx={{
          width: { xs: "100%", md: "250px" },
          borderRight: { md: "1px solid #ddd" },
          pr: { md: 3 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          New Arrival
        </Typography>
        <FilterSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          showSaleOnly={showSaleOnly}
          setShowSaleOnly={setShowSaleOnly}
        />
      </Box>

      {/* Main Content Section */}
      <Box sx={{ flex: 1 }}>
        {/* Sort and Filter Buttons for Mobile */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Button
            startIcon={<FilterAltIcon />}
            variant="outlined"
            onClick={handleFilterDrawerToggle}
          >
            Filter
          </Button>

          <Button
            startIcon={<SortIcon />}
            variant="outlined"
            onClick={handleSortDialogOpen} // 🔥 Added Sort Dialog Trigger
          >
            Sort
          </Button>
        </Box>

        {/* Sort Dialog */}
        <Dialog open={isSortDialogOpen} onClose={handleSortDialogClose}>
          <DialogTitle>Sort Products</DialogTitle>
          <DialogContent>
            <FormControl component="fieldset">
              <RadioGroup
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  handleSortDialogClose(); // Close dialog after selection
                }}
              >
                <FormControlLabel
                  value="default"
                  control={<Radio />}
                  label="Default"
                />
                <FormControlLabel
                  value="price-low-to-high"
                  control={<Radio />}
                  label="Price: Low to High"
                />
                <FormControlLabel
                  value="price-high-to-low"
                  control={<Radio />}
                  label="Price: High to Low"
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSortDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Product Cards */}
        <Grid container spacing={2}>
          {sortedProducts.map((product) => (
            <Grid item key={product.id} xs={6} sm={4} md={3}>
              <ProductCard
                product={product}
                onAddToCart={() => console.log(`Added ${product.name} to cart`)}
                onBuyNow={() => console.log(`Bought ${product.name}`)}
              />
            </Grid>
          ))}
        </Grid>

        {/* No Products Found */}
        {sortedProducts.length === 0 && (
          <Typography sx={{ mt: 4, textAlign: "center" }} color="error">
            No products found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductListing;
