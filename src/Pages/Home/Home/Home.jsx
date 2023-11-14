import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PageBanner from "../PageBanner/PageBanner";
import PopulerManus from "../PopulerManus/PopulerManus";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PageBanner></PageBanner>
            <PopulerManus></PopulerManus>
            <Featured></Featured>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;