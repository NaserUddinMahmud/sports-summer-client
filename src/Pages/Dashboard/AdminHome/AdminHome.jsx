import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import img from '../../../assets/undraw_powerful_re_frhr.svg'


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img className='w-80 mx-auto' src={img} alt="" />
            <h2 className='text-4xl'>Welcome Admin <span className='font-semibold text-slate-500'>{user.displayName}</span></h2>
        </div>
    );
};

export default AdminHome;