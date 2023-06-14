import { Flip } from "react-awesome-reveal";


// import { useEffect, useState } from "react";
import InstructorsCard from "../../Components/InstructorsCard";

import { useState } from "react";
import { useEffect } from "react";

const InstructorsSection = () => {
  const [instructors, setInstructors] =useState([]);
  const maxCards = 6; 
  let cardCount = 0;

  useEffect(()=>{
    fetch('https://assignment-12-sports-summer-server.vercel.app/instructor')
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
        {instructors.map((Class) => {
            if ( cardCount < maxCards) {
              cardCount++; 
              return <InstructorsCard key={Class._id} item={Class} />;
            } else {
              return null;
            }
          })}
        </Flip>
      </div>
      
    </>
  );
};

export default InstructorsSection;
