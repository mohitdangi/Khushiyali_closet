import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Typography } from '@mui/material';

const FilterSection = ({ selectedCategory, setSelectedCategory, selectedColor, setSelectedColor, showSaleOnly, setShowSaleOnly }) => {
    const categories = ['All', 'New Arrival'];
    const colors = ['All', 'Blue', 'White', 'Yellow', 'Beige'];

    return (
        <Box>
            {/* Category Filter */}
            <FormControl fullWidth sx={{ mb: 2 }}>
    <InputLabel shrink>Category</InputLabel>
    <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        displayEmpty
        variant="outlined"  // Ensures the label aligns better
    >
        <MenuItem value="All">All</MenuItem>
        {categories.map((category) => (
            <MenuItem key={category} value={category}>
                {category}
            </MenuItem>
        ))}
    </Select>
</FormControl>





            {/* Color Filter */}
            <Box sx={{ mb: 2 }}>
                <Typography>Color</Typography>
                {colors.map((color) => (
                    <Box
                        key={color}
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: color.toLowerCase(),
                            display: 'inline-block',
                            margin: '4px',
                            cursor: 'pointer',
                            border: selectedColor === color ? '2px solid black' : '1px solid #ccc'
                        }}
                        onClick={() => setSelectedColor(color)}
                    />
                ))}
            </Box>

            {/* Sale Filter */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showSaleOnly}
                        onChange={(e) => setShowSaleOnly(e.target.checked)}
                    />
                }
                label="Show only products on sale"
            />
        </Box>
    );
};

export default FilterSection;
