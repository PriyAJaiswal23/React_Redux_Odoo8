import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./media/carousel/samsung.jpg" />
                    <p className="legend">Samsung</p>
                </div>
                <div>
                    <img src="./media/carousel/xiaomi.jpg" />
                    <p className="legend">Xiaomi</p>
                </div>
                <div>
                    <img src="./media/carousel/android.jpg" />
                    <p className="legend">Android</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;