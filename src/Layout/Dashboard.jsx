import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdBookOnline, MdEmail, MdMenu, MdOutlineFeedback, MdPayment } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCarts();
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 my-2">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'><ImSpoonKnife />
                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'><MdMenu />Manage Items</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/manageBookings'><FaBook></FaBook>Manage bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'><FaUser />All Users</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'><MdPayment />payment history</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to='cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'><MdOutlineFeedback />add review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking'><MdBookOnline />my booking</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/dessert'><MdMenu />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'><MdEmail />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;