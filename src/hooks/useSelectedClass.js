import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useSelectedClass = () => {
    const {user} = useContext(AuthContext)
    const { isLoading, isError, data: selectedClasses =[], error, refetch } = useQuery({
        queryKey: ['selectedClass', user?.email ],
        queryFn: async () =>{
            const res =await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`)
            return res.json();
        },
      })
      return [selectedClasses,refetch]
}
export default useSelectedClass