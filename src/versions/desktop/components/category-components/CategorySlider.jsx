import React, { useState } from 'react';
import { Box } from '@mui/material';

const CategorySlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box >
            <Box component={'img'} src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            
            <Box>
                <Box onClick={nextSlide}>Next</Box>
                <Box onClick={prevSlide}>Previous</Box>
            </Box>
        </Box>
    );
};

export default CategorySlider;