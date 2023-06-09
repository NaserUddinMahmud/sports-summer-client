import { useQuery } from '@tanstack/react-query'

const useInstructors = () => {
    const { isLoading, isError, data: instructors =[], error, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: async () =>{
            const res =await fetch('http://localhost:5000/instructors')
            return res.json();
        },
      })
      return [instructors]
}
    

export default useInstructors;