import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import useAxiosSecure from './useAxiosSecure'

const useMyClasses = () => {
    const {user, isLoading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {  data: myClasses =[] } = useQuery({
        queryKey: ['myClasses' ],
        enabled: !isLoading,
        queryFn: async () =>{
            const res =await axiosSecure(`/myClasses?email=${user?.email}`)
            console.log('axios res', res);
            return res.data;
        },
      })
      return [myClasses]
}
export default useMyClasses