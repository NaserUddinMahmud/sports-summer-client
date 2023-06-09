import { Flip } from "react-awesome-reveal";

import Card2 from "../../Components/Card2";
import { useEffect, useState } from "react";

const InstructorsSection = () => {
  const [instructors, setInstructors] =useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/instructors')
    .then(res => res.json())
    .then(data => setInstructors(data))
  })
  
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
            <Card2 key={instructor._id} item={instructor}></Card2>
          ))}
        </Flip>
      </div>
      
    </>
  );
};

export default InstructorsSection;
