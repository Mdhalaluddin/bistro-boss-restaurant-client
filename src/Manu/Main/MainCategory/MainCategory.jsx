import ManuItem from "../../../Components/Hadding/ManuItem/ManuItem";
import Cover from "../../../Pages/Home/Sheared/Cover/Cover";


const MainCategory = ({ items, title, img }) => {
    return (
        <div className="py-10">
            {title && <Cover img={img} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    items?.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
        </div>
    );
};

export default MainCategory;