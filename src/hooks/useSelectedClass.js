import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import useAxiosSecure from './useAxiosSecure'

const useSelectedClass = () => {
    const {user, isLoading} = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    const axiosSecure = useAxiosSecure()
    const {  data: selectedClasses =[],  refetch } = useQuery({
        queryKey: ['selectedClass' ],
        enabled: !isLoading,
        queryFn: async () =>{
            const res =await axiosSecure(`/selectedClasses?email=${user?.email}`)
            console.log('axios res', res);
            return res.data;
        },
      })
      return [selectedClasses,refetch]
}
export default useSelectedClass