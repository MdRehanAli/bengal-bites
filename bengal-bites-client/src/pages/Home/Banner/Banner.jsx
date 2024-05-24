import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../../../src/assets/home/1.png'
import image2 from '../../../../src/assets/home/2.png'
import image3 from '../../../../src/assets/home/3.png'
import image4 from '../../../../src/assets/home/4.png'
import image5 from '../../../../src/assets/home/5.png'
import image6 from '../../../../src/assets/home/6.png'
import image7 from '../../../../src/assets/home/7.png'
import image8 from '../../../../src/assets/home/8.png'

const Banner = () => {
    return (
        <Carousel autoPlay>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image6} />
                </div>
                <div>
                    <img src={image7} />
                </div>
                <div>
                    <img src={image8} />
                </div>
            </Carousel>
    );
};

export default Banner;