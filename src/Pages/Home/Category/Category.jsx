import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import swiper1 from '../../../assets/home/slide1.jpg';
import swiper2 from '../../../assets/home/slide2.jpg';
import swiper3 from '../../../assets/home/slide3.jpg';
import swiper4 from '../../../assets/home/slide4.jpg';
import swiper5 from '../../../assets/home/slide5.jpg'
import Heading from '../../../Components/Hadding/Heading';
const Category = () => {
    return (
        <div className='my-10'>
            <Heading 
            subHeading={'From 11:00am to 10:00pm'}
            heading={'ORDER ONLINE'}
            >

            </Heading>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={swiper1} alt="" />
                    <h3 className='text-2xl font-semibold text-center text-white -mt-16 mr-28'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper2} alt="" />
                    <h3 className='text-2xl font-semibold text-center text-white -mt-16 mr-28'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper3} alt="" />
                    <h3 className='text-2xl font-semibold text-center text-white -mt-16 mr-28'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper4} alt="" />
                    <h3 className='text-2xl font-semibold text-center text-white -mt-16 mr-28'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper5} alt="" />
                    <h3 className='text-2xl font-semibold text-center text-white -mt-16 mr-28'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;