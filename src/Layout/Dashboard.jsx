import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdBookOnline, MdMenu, MdOutlineFeedback, MdPayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";


const Dashboard = () => {
    const [cart]= useCarts()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 my-2">
                    <li>
                        <NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'><MdPayment />payment history</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><MdOutlineFeedback />add review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'><MdBookOnline/>my booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/dessert'><MdMenu/>Menu</NavLink>
                    </li>
                </ul>
                
            </div>
            <div className="flex-1 p-10 bg-[#F6F6F6] ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;