import { useEffect, useState } from "react";
import Heading from "../../../Components/Hadding/Heading";


const PopulerManus = () => {
    const [manus, setManus] = useState();
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            const popularItem = data.filter(item=> item.category === 'popular');
            setManus(popularItem)
            console.log(data)
        })
    },[])
    return (
        <section className="bg-[#FFF]">
            <Heading
            subHeading='Check it out'
            heading='FROM OUR MENU'
            ></Heading>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {/* {
                    manus.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                } */}
            {/* {
                manus.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
            } */}
            </div>
        </section>
    );
};

export default PopulerManus;