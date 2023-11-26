import Heading from "../../../Components/Hadding/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from 'react-icons/fa';

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonial = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-gray.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="my-20">
            <Heading subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'} >
            </Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map((review) => <SwiperSlide key={review._id}>
                        <div className="mx-20 mt-3 text-center">
                            <div className="flex items-center justify-center my-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            </div>
                            <div className="text-7xl text-center flex justify-center my-3">
                            <FaQuoteLeft />
                            </div>
                            <p className="text-center my-4">{review.details}</p>
                            <h2 className="text-4xl font-semibold font-serif text-center text-rose-500">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;