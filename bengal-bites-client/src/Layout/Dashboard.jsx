import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 text-black">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaAd></FaAd> Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"><FaList></FaList> My bookings</NavLink>
                    </li>
                    <div className="divider divider-accent"></div>

                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;