import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/ball.png";
import { HiLogin, HiLogout } from "react-icons/hi";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
          .then(() => {
            Swal.fire({
                icon: "info",
                title: "You Have Signed Out!",
                
              });
          })
          .catch((error) => console.error(error));
      };
  const navItems = (
    <>
      <li>
        <NavLink to={'/'}className={({ isActive }) =>
                  isActive ? "bg-success rounded-2xl " : ""}>Home</NavLink>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <a>Instructors</a>
      </li>
      <li>
        {user && <a>Dashboard</a>}
      </li>
    </>
  );

  return (
    <>
      <div className="navbar  fixed top-0 z-10 max-w-screen-xl bg-green-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navItems}
            </ul>
          </div>
          <Link className=" mx-2">
            <div className="flex justify-center items-center -ml-2">
              <img className="w-12" src={logo} alt="" />
              <div>
                <h1 className="uppercase text-2xl font-bold">Sports</h1>
                <h1 className="uppercase text-2xl font-bold">Summer</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          

          {user ? (
          <>
            <div className="avatar tooltip tooltip-bottom"data-tip={user.displayName}>
              <div className="w-12 rounded-full me-4">
              {user.photoURL?
             <><img src={user.photoURL}/></> 
            : <><img src='
            https://i.ibb.co/gt2zhwX/abstract-user-flat-1.png'/></>

            }
              </div>
            </div>
            <button onClick={handleSignOut} className="btn bg-gray-400 btn-sm rounded-3xl text-slate-900">
              Sign Out<HiLogout/>
            </button>
          </>
        ) : (
          <>
            <Link to={'/login'} className="btn btn-sm bg-gray-400 rounded-3xl text-slate-900">Sign in<HiLogin/></Link>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
