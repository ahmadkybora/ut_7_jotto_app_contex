import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Search } from '../../../utils/tools';

const Navbar = () => {
    const fullName = localStorage.getItem('fullName');
    const isAdmin = localStorage.getItem('isAdmin');
    const style = {
      backgroundColor: "#e3f2fd"
    }

    return (
        <nav className="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10" style={style}>
          <Link className="navbar-brand" to="/">Home</Link>
          { ( isAdmin === "true" ) && (
              <NavLink className="nav-item nav-link text-success" to="/panel/dashboard">
                Panel
              </NavLink>
          )}

          <div className="">
              <Search 
                type={["search", "submit"]} 
                name={["search", ""]} 
                className={["form-control col-md-12", "bg-green-500 text-white"]} 
                id={["search", ""]} 
                value={["", ""]} 
                placeholder="Search ..." 
              />
          </div>

          { !fullName && (
            <React.Fragment>
              <div className='flex'>
                <NavLink className="bg-blue-500 text-white font-bold py-2 px-4 rounded" to="/login">
                  Login
                </NavLink>
                <NavLink className="bg-blue-500 text-white font-bold py-2 px-4 rounded" to="/register">
                  Register
                </NavLink>
              </div>
            </React.Fragment>
          )}
          { fullName && (
            <React.Fragment>
              <div className='flex'>
                <NavLink 
                  className="bg-red-300 text-white font-bold py-2 px-4 rounded" 
                  to="/logout"
                >
                  Logout
                </NavLink>

                <NavLink className="font-bold py px-4" to="/profile">
                    {fullName}
                </NavLink>
              </div>
            </React.Fragment>
          )}
      </nav>
    )
}

export default Navbar;