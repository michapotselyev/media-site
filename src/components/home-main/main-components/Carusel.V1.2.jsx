import React, { Component } from 'react';
import { Box } from '@mui/material';
import ourServices from '../../../styles/our-services-prop';

class CarouselV2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            visibleSlides: this.props.slides,
            swipeData: -50,
            isAnimate: false,
            timerId: null
        };
    }

    componentDidMount() {
        // const timerId = setInterval(this.nextSlide, 8000);
        // this.setState({ timerId });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    clearTimer() {
        const { timerId } = this.state;

        if (timerId) {
            clearInterval(timerId);
            this.setState({ timerId: null });
        }
    }

    prevSlide = () => {
        const { visibleSlides, isAnimate } = this.state;

        if (isAnimate) return;

        this.clearTimer();

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

        this.clearTimer();

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
                <Box sx={ ourServices.slider } id='slider'>
                    {
                        visibleSlides.map((slide, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        ...ourServices.slider.item,
                                        transform: `translateX(${swipeData}%)`,
                                        transition: isAnimate ? 'transform 1s ease-in-out' : ''
                                    }}
                                >
                                    {slide}
                                </Box>
                            )
                        })
                    }
                </Box>

                <Box sx={ ourServices.slider.buttonWrapper }>
                    <Box
                        id='0'
                        sx={ ourServices.slider.buttonWrapper.button }
                    ></Box>

                    <Box
                        id='1'
                        sx={ ourServices.slider.buttonWrapper.button }
                    ></Box>

                    <Box
                        id='2'
                        sx={ ourServices.slider.buttonWrapper.button }
                    ></Box>

                    <Box
                        id='3'
                        sx={ ourServices.slider.buttonWrapper.button }
                    ></Box>

                    <Box
                        id='4'
                        sx={ ourServices.slider.buttonWrapper.button }
                    ></Box>
                </Box>
            </>
        );
    }
}

export default CarouselV2;
