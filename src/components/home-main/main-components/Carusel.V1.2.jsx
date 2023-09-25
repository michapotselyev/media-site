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
        const timerId = setInterval(() => {
            const { isAnimate, currentIndex } = this.state;

            const prevIndex = currentIndex;
            const counter = currentIndex === 4 ? 0 : currentIndex + 1;

            if (isAnimate) return;

            this.setState({ currentIndex: counter }, () => this.sliderChanger(prevIndex, false));
        }, 10*60*1000);

        this.setState({ timerId });
    }

    componentWillUnmount() {
        const { timerId } = this.state;

        clearInterval(timerId);
    }

    clearTimer() {
        const { timerId } = this.state;

        if (timerId) {
            clearInterval(timerId);
            this.setState({ timerId: null });
        }
    }

    handleSlide = event => {
        const { currentIndex, isAnimate } = this.state;
        const prevIndex = currentIndex;
        let move;
        
        if (isAnimate) return;
        if (currentIndex === (+ event.target.id)) return;

        currentIndex < (+ event.target.id) ? move = false : move = true;

        this.setState({ currentIndex: (+ event.target.id) }, () => this.sliderChanger(prevIndex, move));
    }

    sliderChanger = (prevIndex, move) => {
        const { visibleSlides, currentIndex } = this.state;
        const { slides } = this.props;

        this.clearTimer();
        
        const slidesQueryPrepared = slides.slice(currentIndex, visibleSlides.length);
        const slidesQuery = slidesQueryPrepared.concat(slides.slice(0, currentIndex));

        prevIndex === 0 && currentIndex === slides.length - 1 ?
            this.setState({ swipeData: -150, isAnimate: false, visibleSlides: slidesQuery }, () => {
                setTimeout(() => this.setState({ isAnimate: true, swipeData: -50 }, () => {
                    setTimeout(() => this.setState({ isAnimate: false }), 1000)
                }), 20)
            })
        :
            prevIndex === 0  && currentIndex === slides.length - 2 ?
                this.setState({ swipeData: -250, isAnimate: false, visibleSlides: slidesQuery }, () => {
                    setTimeout(() => this.setState({ isAnimate: true, swipeData: -50 }, () => {
                        setTimeout(() => this.setState({ isAnimate: false }), 1000)
                    }), 20)
                })
            :
                prevIndex === slides.length - 1  && currentIndex === 0 ?
                    this.setState({ swipeData: -150, isAnimate: true }, () => {
                        setTimeout(() => this.setState({ isAnimate: false, swipeData: -50, visibleSlides: slidesQuery }), 1000)
                    })
                :
                    prevIndex === slides.length - 2  && currentIndex === 0 ?
                        this.setState({ swipeData: -150 - 100 * (prevIndex - 2), isAnimate: true }, () => {
                            setTimeout(() => this.setState({ isAnimate: false, swipeData: -50, visibleSlides: slidesQuery }), 1000)
                        })
                    :
                        move ?
                            this.setState({ swipeData: -150 - 100 * (prevIndex - 1 - currentIndex), isAnimate: false, visibleSlides: slidesQuery  }, () => {
                                setTimeout(() => this.setState({ isAnimate: true, swipeData: -50 }, () => {
                                    setTimeout(() => this.setState({ isAnimate: false }), 1000)
                                }), 20)
                            })
                        :
                            this.setState({ swipeData: -150 - 100 * (currentIndex - 1 - prevIndex), isAnimate: true }, () => {
                                setTimeout(() => this.setState({ isAnimate: false, swipeData: -50, visibleSlides: slidesQuery }), 1000)
                            })
    }

    render() {
        const { visibleSlides, swipeData, isAnimate, currentIndex } = this.state;

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
                        sx={ ourServices.slider.buttonWrapper.layout }
                        onClick={(event) => this.handleSlide(event)}
                    >
                        <Box
                            id="0"
                            sx={
                                currentIndex === 0 ?
                                    [ ourServices.slider.buttonWrapper.button, { backgroundColor: '#2c9ff2' } ]
                                :
                                    ourServices.slider.buttonWrapper.button
                            }
                        />
                    </Box>

                    <Box
                        id='1'
                        sx={ ourServices.slider.buttonWrapper.layout }
                        onClick={(event) => this.handleSlide(event)}
                    >
                        <Box
                            id='1'
                            sx={
                                currentIndex === 1 ?
                                    [ ourServices.slider.buttonWrapper.button, { backgroundColor: '#2c9ff2' } ]
                                :
                                    ourServices.slider.buttonWrapper.button
                            }
                            />
                    </Box>

                    <Box
                        id='2'
                        sx={ ourServices.slider.buttonWrapper.layout }
                        onClick={(event) => this.handleSlide(event)}
                    >
                        <Box
                            id='2'
                            sx={
                                currentIndex === 2 ?
                                    [ ourServices.slider.buttonWrapper.button, { backgroundColor: '#2c9ff2' } ]
                                :
                                    ourServices.slider.buttonWrapper.button
                            }
                        />
                    </Box>

                    <Box
                        id='3'
                        sx={ ourServices.slider.buttonWrapper.layout }
                        onClick={(event) => this.handleSlide(event)}
                    >
                        <Box
                            id='3'
                            sx={
                                currentIndex === 3 ?
                                    [ ourServices.slider.buttonWrapper.button, { backgroundColor: '#2c9ff2' } ]
                                :
                                    ourServices.slider.buttonWrapper.button
                            }
                        />
                    </Box>

                    <Box
                        id='4'
                        sx={ ourServices.slider.buttonWrapper.layout }
                        onClick={(event) => this.handleSlide(event)}
                    >
                        <Box
                            id='4'
                            sx={
                                currentIndex === 4 ?
                                    [ ourServices.slider.buttonWrapper.button, { backgroundColor: '#2c9ff2' } ]
                                :
                                    ourServices.slider.buttonWrapper.button
                            }
                        />
                    </Box>
                </Box>
            </>
        );
    }
}

export default CarouselV2;
