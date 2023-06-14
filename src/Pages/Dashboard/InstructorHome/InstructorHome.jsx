import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import img from '../../../assets/undraw_home_run_acyh.svg'

const InstructorHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img className='w-52 mx-auto' src={img} alt="" />
            <h2 className='text-4xl'>Welcome Instructor <span className='font-semibold text-slate-500'>{user.displayName}</span></h2>
        </div>
    );
};

export default InstructorHome;