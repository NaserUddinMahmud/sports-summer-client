import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaBasketballBall, FaHome } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-success drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-green-100 text-base-content ">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <Link className="btn btn-success my-1"  to={'/dashboard/manageClass'}><li>
                Manage Classes
              </li></Link>
              <Link className="btn btn-success my-1"  to={"/dashboard/allUsers"}><li>
                Manage Users
              </li></Link>
            </>
          ) : isInstructor?
          (<>
              <Link className="btn btn-success my-1"  to={"/dashboard/addClass"}><li>
                Add a Class
              </li></Link>
              <Link ><li>
                My Classes
              </li></Link>
            </>)
             : (
            <>
              <Link className="btn btn-success my-1"  to={"/dashboard/mySelectedClass"}><li>
                
                  My Selected Classes
                
              </li></Link>
              <Link className="btn btn-success my-1" to={'/dashboard/myEnrolledClass'}><li>
                My Enrolled Classes
              </li></Link>
            </>
          )}

          <div className="divider"></div>
          <Link className="btn btn-success my-1"  to={"/"}><FaHome/><li>
            Home
          </li></Link>
          <Link className="btn btn-success my-1"  to={"/classes"}><FaBasketballBall/><li>
            Classes
          </li></Link>
          <Link className="btn btn-success my-1"  to={"/instructors"}><IoAccessibility/><li>
            Instructor
          </li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
