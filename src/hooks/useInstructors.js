import { useQuery } from '@tanstack/react-query'

const useInstructors = () => {
    const {  data: instructors =[],   } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () =>{
            const res =await fetch('https://assignment-12-sports-summer-server.vercel.app/instructors')
            return res.json();
        },
      })
      return [instructors]
}
    

export default useInstructors;