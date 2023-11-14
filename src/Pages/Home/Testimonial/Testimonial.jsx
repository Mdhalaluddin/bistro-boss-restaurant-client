import Heading from "../../../Components/Hadding/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonial = () => {
    const [reviews, setReviews] = useState();
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])
    return (
        <div className="my-20">
            <Heading subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'} >
            </Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map((review )=> <SwiperSlide key={review._id}>
                        <p>{review.details}</p>
                        <h2 className="text-2xl text-rose-500">{review.name}</h2>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;