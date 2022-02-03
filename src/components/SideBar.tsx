import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className='management-side-bar-container'>
            <div className='side-bar-navigation-container'>
                <NavLink to="/home">  Home</NavLink>
                <NavLink to="/search">Search</NavLink>
                <NavLink to="/library"> Library</NavLink>
            </div>

        </div>
    )
}
