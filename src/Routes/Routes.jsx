import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SIgnUp/SIgnUp";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signUp',
        element:<SignUp></SignUp>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'/dashboard/mySelectedClass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path:'/dashboard/allUsers',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);
