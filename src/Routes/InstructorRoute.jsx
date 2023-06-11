import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const{user, isLoading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();
    console.log(location);
    
    if(isLoading || isInstructorLoading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user && isInstructor){
        return children;
    }
    return <>
    {/* navigate to 404 page */}
    <Navigate state={{from: location}} to='/' replace>
        
    </Navigate>
    </>
};

export default InstructorRoute;