import { Flip } from "react-awesome-reveal";


// import { useEffect, useState } from "react";
import InstructorsCard from "../../Components/InstructorsCard";
import useInstructors from "../../hooks/useInstructors";

const InstructorsSection = () => {
  // const [instructors, setInstructors] =useState([])
  // useEffect(()=>{
  //   fetch('http://localhost:5000/instructors')
  //   .then(res => res.json())
  //   .then(data => setInstructors(data))
  // })

  const [instructors] = useInstructors()
  
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold mx-auto flex justify-center my-4">
          Popular Instructors
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 ">
        <Flip>
          {instructors.map((instructor) => (
            <InstructorsCard key={instructor._id} item={instructor}></InstructorsCard>
          ))}
        </Flip>
      </div>
      
    </>
  );
};

export default InstructorsSection;
