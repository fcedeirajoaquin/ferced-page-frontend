import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img
                     src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1taL0xLDlAhWUpp4KHYizCBwQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.apimages.com%2Fcreative-stock%3Fss%3D100528&psig=AOvVaw0q2BNCX0DRA95Q0cVPuotw&ust=1571856766103236" 
                    alt="new"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img   src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1taL0xLDlAhWUpp4KHYizCBwQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.apimages.com%2Fcreative-stock%3Fss%3D100528&psig=AOvVaw0q2BNCX0DRA95Q0cVPuotw&ust=1571856766103236" 
                    alt="new"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img   src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1taL0xLDlAhWUpp4KHYizCBwQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.apimages.com%2Fcreative-stock%3Fss%3D100528&psig=AOvVaw0q2BNCX0DRA95Q0cVPuotw&ust=1571856766103236" 
                    alt="new"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));