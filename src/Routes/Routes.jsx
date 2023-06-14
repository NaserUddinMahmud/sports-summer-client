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
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
      // student Routes
      {
        path: '/dashboard/studentHome',
        element:<StudentHome></StudentHome>
      },
      {
        path:'/dashboard/mySelectedClass',
        element: <PrivateRoute><MySelectedClass></MySelectedClass></PrivateRoute>
      },
      {
        path:'/dashboard/myEnrolledClass',
        element: <PrivateRoute><MyEnrolledClass></MyEnrolledClass></PrivateRoute>,
      },
      {
        path:'/dashboard/paymentHistory',
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://assignment-12-sports-summer-server.vercel.app/selectedClasses/${params.id}`)
      },
      // admin routes
      {
        path: '/dashboard/adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/feedback/:id',
        element: <AdminRoute><Feedback></Feedback></AdminRoute>,
        loader: ({params}) => fetch(`https://assignment-12-sports-summer-server.vercel.app/classes/${params.id}`)
      },
      {
        path: '/dashboard/manageClass',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      // instructor routes
      {
        path: '/dashboard/instructorHome',
        element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path: '/dashboard/addClass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: '/dashboard/myClasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>,
       
      },
    ]
  }
]);
