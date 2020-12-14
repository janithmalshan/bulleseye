import React from "react";
import img1 from "../../assets/images/img-s3.jpg"
import img2 from "../../assets/images/img-s2.jpg"
import img3 from "../../assets/images/img-s1.jpg"

export class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                img1,
                img2,
                img3,
                // "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">

                <div className="slider-wrapper"
                     style={{
                         transform: `translateX(${this.state.translateValue}px)`,
                         transition: 'transform ease-out 0.45s'
                     }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>

                <div className="slider-overlay"></div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}


const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24">
                <path id="ic_chevron_right_24px" d="M11.444,6,8.59,8.82,17.861,18,8.59,27.18,11.444,30,23.59,18Z" transform="translate(-8.59 -6)" fill="#fff"/>
            </svg>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24">
                <path id="ic_chevron_right_24px" d="M11.444,6,8.59,8.82,17.861,18,8.59,27.18,11.444,30,23.59,18Z" transform="translate(-8.59 -6)" fill="#fff"/>
            </svg>
        </div>
    );
}
