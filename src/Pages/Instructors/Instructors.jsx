import { useEffect, useState } from "react";

import { Flip } from "react-awesome-reveal";
import InstructorsCard from "../../Components/InstructorsCard";



const Instructors = () => {
    const [instructors, setInstructors] =useState([]);
   
    useEffect(()=>{
      fetch('https://assignment-12-sports-summer-server.vercel.app/instructor')
      .then(res => res.json())
      .then(data => setInstructors(data))
    })

    return (
        <>
        <div>
          <h2 className="text-4xl font-bold mx-auto flex justify-center my-4">
            Popular Classes
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 ">
          <Flip>
            {instructors.map((Class) => 
              {
                return <InstructorsCard key={Class._id} item={Class}></InstructorsCard>;
              
                
              }
            )}
          </Flip>
        </div>
      </>
    );
};

export default Instructors;