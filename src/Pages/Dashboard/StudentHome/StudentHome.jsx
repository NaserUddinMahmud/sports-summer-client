import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import img from '../../../assets/undraw_basketball_re_7701.svg'


const StudentHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img className='w-36 mx-auto' src={img} alt="" />
            <h2 className='text-4xl'>Welcome Student <span className='font-semibold text-slate-500'>{user.displayName}</span></h2>
        </div>
    );
};

export default StudentHome;