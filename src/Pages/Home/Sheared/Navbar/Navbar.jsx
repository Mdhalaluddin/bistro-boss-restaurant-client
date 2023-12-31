import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCarts from "../../../../hooks/useCarts";
import useAdmin from "../../../../hooks/useAdmin";



const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const [cart] = useCarts();
    const [isAdmin] = useAdmin();
    const handleLogoutBtn = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>menu</Link></li>
        <li><Link to='/signUp'>SingUP</Link></li>
        {
            user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to='/dashboard/userHome'>Dashboard</Link></li>
        }
        
        <li><Link to='/dashboard/cart'>
            <button className="btn btn-sm text-xl">
                <FaShoppingCart />
                <div className="badge  badge-secondary">+{cart?.length}</div>
            </button>
        </Link></li>
        {
            user ?
                <>
                    <div className="flex items-center gap-4">
                        <span className="text-yellow-400 font-bold">{user.displayName}</span>
                        <button onClick={handleLogoutBtn} className="btn btn-sm btn-outline btn-secondary">LogOut</button>
                    </div>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-30 opacity-80 max-w-7xl bg-gray-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;