
import Heading from "../../../Components/Hadding/Heading";
import ManuItem from "../../../Components/Hadding/ManuItem/ManuItem";
import useMenu from "../../../hooks/useMenu";



const PopulerManus = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="bg-[#FFF]">
            <Heading
                subHeading='Check it out'
                heading='FROM OUR MENU'
            ></Heading>
            
            <div className="grid md:grid-cols-2 gap-6 my-10">

                {
                    popular?.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopulerManus;