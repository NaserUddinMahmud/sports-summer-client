import React from "react";
import Card from "../../Components/Card";
import { Bounce } from "react-awesome-reveal";
const Classes = () => {
  return (
    <div className="grid lg:grid-cols-3">
       <Bounce>
       <Card img={'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} name={'Cricket Coaching'}></Card>
        <Card img={'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} name={'Cricket Coaching'}></Card>
        <Card img={'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} name={'Cricket Coaching'}></Card>
        <Card img={'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} name={'Cricket Coaching'}></Card>
       </Bounce>
    </div>
  );
};

export default Classes;
