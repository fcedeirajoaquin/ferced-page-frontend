import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';

class ImageCarousel extends Component {
    imageStyle = {
        height: "90px"
      }
     responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 200, min: 100 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 0.5,
        },
      };

    render() {
        return (
            <div style={{ paddingBottom: "50px" }}>
                <Carousel centerMode={true} arrows={false} autoPlay={true} infinite={true} transitionDuration={100} responsive={this.responsive}>
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/firebaselogo.png"} alt="3" />
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/angularlogo.svg"} alt="new" />
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/JsCssHtml5Logo.png"} alt="2" />
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/pythonlogo.svg"} alt="4" />
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/reactlogo.png"} alt="5" />
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/sqllogo.png"} alt="6" />
                    <img style={this.imageStyle} src={process.env.PUBLIC_URL + "/technologylogo/javalogo.png"} alt="1" />
                </Carousel>
            </div>

        )
    }
}

export default ImageCarousel;
