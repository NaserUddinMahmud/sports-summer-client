import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import useAxiosSecure from './useAxiosSecure'

const useEnrolledClasses = () => {
    const {user, isLoading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {  data: enrolledClasses =[] } = useQuery({
        queryKey: ['enrolledClasses' ],
        enabled: !isLoading,
        queryFn: async () =>{
            const res =await axiosSecure(`/enrolledClasses?email=${user?.email}`)
           
            return res.data;
        },
      })
      return [enrolledClasses]
}
export default useEnrolledClasses