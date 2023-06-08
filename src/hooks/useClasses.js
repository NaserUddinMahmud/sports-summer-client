import { useQuery } from '@tanstack/react-query'
const useClasses = () => {
    const { isLoading, isError, data: classes =[], error, refetch } = useQuery({
        // queryKey: ['todos'],
        queryFn: async () =>{
            const res =await fetch('classes.json')
            return res.json();
        },
      })
      return [classes]
}

export default useClasses;