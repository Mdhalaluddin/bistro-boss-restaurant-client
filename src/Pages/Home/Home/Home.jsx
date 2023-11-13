import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PageBanner from "../PageBanner/PageBanner";
import PopulerManus from "../PopulerManus/PopulerManus";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PageBanner></PageBanner>
           <PopulerManus></PopulerManus>
           <Featured></Featured>
            
        </div>
    );
};

export default Home;