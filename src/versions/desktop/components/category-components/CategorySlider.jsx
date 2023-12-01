import React, { useState } from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 1rem'
                }}
            >
                <Box onClick={nextSlide}>
                    <ArrowBackIcon />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
                    {
                        images.map((e, index) => {
                            return <Box key={index + ''} sx={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: currentIndex === index ? 'white' : '#909090' }} />
                        })
                    }
                </Box>
                <Box onClick={prevSlide}>
                    <ArrowForwardIcon />
                </Box>
            </Box>
        </Box>
    );
};

export default CategorySlider;