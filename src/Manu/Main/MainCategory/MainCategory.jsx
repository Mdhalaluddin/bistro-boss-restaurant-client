import { Link } from "react-router-dom";
import ManuItem from "../../../Components/Hadding/ManuItem/ManuItem";
// import Cover from "../../../Pages/Home/Sheared/Cover/Cover";


const MainCategory = ({ items, title}) => {
    console.log(title);
    return (
        <div className="py-10">
            {/* {<Cover img={img} title={title} ></Cover>} */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    items?.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
           <Link to={`/order/${title}`}>
           <div className="card-actions my-2 justify-center">
                <button className="btn btn-outline border-b-4 border-0  text-xl btn-warning uppercase">add to favarit cart {title}</button>
            </div>
           </Link>
        </div>
    );
};

export default MainCategory;