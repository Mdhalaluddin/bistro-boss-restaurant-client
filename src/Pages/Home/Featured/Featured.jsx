import Heading from "../../../Components/Hadding/Heading";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="my-16 featured-item text-white p-4">
            <Heading subHeading='Check it out' heading='FROM OUR MENU'></Heading>
            <div className="md:flex justify-center items-center px-16 py-8 gap-8">
                <img className="w-[600px]" src={featuredImg} alt="" />
                <div>
                    <h2 className="text-2xl font-serif">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam laboriosam quod, suscipit debitis possimus optio facilis! Doloribus quibusdam reiciendis harum?</p>
                    <button className="btn mt-8 btn-outline btn-secondary">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;