import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const{user, isLoading} = useContext(AuthContext);
    const location = useLocation();

    
    if(isLoading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <>
    
    <Navigate state={{from: location}} to='/login' replace>
        { Swal.fire({
                icon: "warning",
                title: "You have to sign in to proceed!",
                
              })}
    </Navigate>
    </>
};

export default PrivateRoute;