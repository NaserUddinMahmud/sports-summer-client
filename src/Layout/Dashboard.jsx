import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

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
              <li>
                <Link>Manage Classes</Link>
              </li>
              <li>
                <Link to={"/dashboard/allUsers"}>Manage Users</Link>
              </li>
            </>
          ) : isInstructor?
          (<>
              <li>
                <Link to={"/dashboard/addClass"}>Add a Class</Link>
              </li>
              <li>
                <Link >My Classes</Link>
              </li>
            </>)
             : (
            <>
              <li>
                <Link to={"/dashboard/mySelectedClass"}>
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link>My Enrolled Classes</Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
