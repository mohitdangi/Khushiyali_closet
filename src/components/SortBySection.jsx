import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortBySection = ({ sortBy, setSortBy }) => {
    const sortOptions = ['Default', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A'];

    return (
        <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    {sortOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortBySection;
