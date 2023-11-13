import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Sheared/Footer/Footer";
import Navbar from "../Pages/Home/Sheared/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;