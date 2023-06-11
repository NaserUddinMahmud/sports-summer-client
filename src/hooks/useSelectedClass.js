import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useSelectedClass = () => {
    const {user} = useContext(AuthContext)
    const {  data: selectedClasses =[],  refetch } = useQuery({
        queryKey: ['selectedClass' ],
        queryFn: async () =>{
            const res =await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`)
            return res.json();
        },
      })
      return [selectedClasses,refetch]
}
export default useSelectedClass