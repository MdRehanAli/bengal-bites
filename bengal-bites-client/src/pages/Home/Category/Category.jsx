import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className="text-xl lg:text-4xl uppercase text-center -mt-20 mb-10 text-white ">Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className="text-xl lg:text-4xl uppercase text-center -mt-20 text-white ">Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className="text-xl lg:text-4xl uppercase text-center -mt-20 text-white ">Soup</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className="text-xl lg:text-4xl uppercase text-center -mt-20 text-white ">Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className="text-xl lg:text-4xl uppercase text-center -mt-20 text-white ">Salad</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;