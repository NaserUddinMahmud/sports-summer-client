import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({item}) => {
  const{_id, image, name, instructor, availableSeats, price} = item;
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()

  const handleSelect = item =>{
    
    console.log(item);
    if(user && user.email){
      const selectedClass = {classId: _id, name, image, price, email: user.email}
      fetch('http://localhost:5000/selectedClasses',{
        method: "POST",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectedClass)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            icon: "success",
            title: "Class Selected Successfully!",
          });
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please login to select classes',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
        navigate('/login', {state: {from: location}})
        }
      })
    }
  }
    
  return (
    <>
     
     <div className="card w-80 h-96 bg-base-100 shadow-xl image-full mx-auto">
  <figure><img className="" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold text-green-400">{name}</h2>
    <p>Instructor: {instructor}</p>
    <p>Available Seats: { availableSeats}</p>
    <p>Price: ${price}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleSelect(item)} className="btn btn-sm bg-slate-600 text-white rounded-2xl">Select</button>
    </div>
  </div>
</div>
     
    </>
  );
};

export default ClassesCard;
