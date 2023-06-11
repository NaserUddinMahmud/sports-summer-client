import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const{user, isLoading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    console.log(location);
    
    if(isLoading || isAdminLoading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <>
    {/* navigate to 404 page */}
    <Navigate state={{from: location}} to='/' replace>
        
    </Navigate>
    </>
};

export default AdminRoute;