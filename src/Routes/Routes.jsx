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
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Feedback from "../Pages/Dashboard/ManageClasses/Feedback";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'/dashboard/mySelectedClass',
        element: <PrivateRoute><MySelectedClass></MySelectedClass></PrivateRoute>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:5000/selectedClasses/${params.id}`)
      },
      {
        path:'/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/addClass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: '/dashboard/manageClass',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: '/dashboard/feedback/:id',
        element: <AdminRoute><Feedback></Feedback></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
      }
      
    ]
  }
]);
