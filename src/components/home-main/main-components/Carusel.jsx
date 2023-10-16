import React, { Component } from 'react';
import { Box, Button } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleSlides: this.props.slides,
            swipeData: -50,
            isAnimate: false,
            timerId: null
        };

        this.isSmallScreen = this.props.isSmallScreen;
    }

    componentDidMount() {
        const timerId = setInterval(this.nextSlide, 8000);
        this.setState({ timerId });
    }

    componentWillUnmount() {
        const { timerId } = this.state;

        clearInterval(timerId);
    }

    prevSlide = () => {
        const { visibleSlides, isAnimate } = this.state;

        if (isAnimate) return;

        const slidesQueryPrepared = visibleSlides.slice(0, visibleSlides.length - 1);
        const lastSlide = visibleSlides.slice(visibleSlides.length - 1, visibleSlides.length);
        const slidesQuery = lastSlide.concat(slidesQueryPrepared);

        this.setState({ swipeData: -150, visibleSlides: slidesQuery, isAnimate: false }, () => {
            setTimeout(() => this.setState({ swipeData: -50, isAnimate: true }, () => {
                setTimeout(() => this.setState({ isAnimate: false }), 1000)
            }), 20);
        });
    }

    nextSlide = () => {
        const { visibleSlides, isAnimate } = this.state;

        if (isAnimate) return;

        const slidesQueryPrepared = visibleSlides.slice(1, visibleSlides.length);
        const slidesQuery = slidesQueryPrepared.concat(visibleSlides.slice(0, 1));

        this.setState({ swipeData: -150, isAnimate: true }, () => {
            setTimeout(() => this.setState({ swipeData: -50, visibleSlides: slidesQuery, isAnimate: false }), 1000);
        });
    }

    render() {
        const { visibleSlides, swipeData, isAnimate } = this.state;

        return (
            <>
                <Box sx={ aboutUs.slider } id='slider'>
                    {
                        visibleSlides.map((slide, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        ...aboutUs.slider.item,
                                        width: this.isSmallScreen ? '50%' : '25%',
                                        transform: `translateX(${swipeData}%)`,
                                        transition: isAnimate ? 'transform 1s ease-in-out' : ''
                                    }}
                                >
                                    {slide}
                                </Box>
                            )
                        })
                    }

                    <Button sx={[ aboutUs.slider.buttonWrapper, { left: 0 } ]} onClick={ this.prevSlide }>
                        <ArrowBackIosNewIcon fontSize='large' color='primary' />
                    </Button>

                    <Button sx={[ aboutUs.slider.buttonWrapper, { right: 0 } ]} onClick={ this.nextSlide } >
                        <ArrowForwardIosIcon fontSize='large' color='primary' />
                    </Button>
                </Box>
            </>
        );
    }
}

export default Carousel;
