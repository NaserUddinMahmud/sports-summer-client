import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import { FcApproval, FcCancel, FcFeedback } from "react-icons/fc";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [classes, , refetch] = useClasses();

  const handleApprove = (Class) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/classes/approve/${Class._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          
         
        }
      });
          Swal.fire(
            'Approved!',
            `${Class.name} from ${Class.instructor} is Approved.`,
            'success'
          )
        }
      })




    
  };

  const handleDeny = (Class) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/classes/deny/${Class._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
         

        }
      });
          Swal.fire(
            'Denied!',
            `${Class.name} from ${Class.instructor} is Denied.`,
            'error'
          )
        }
      })



    
  };

  

  return (
    <>
      <div>
        <h2>manage classes</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Class</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Seats</th>

              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {classes.map((Class, index) => (
              <tr key={Class._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={Class.image} alt="class image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{Class.name}</td>
                <td>{Class.instructor}</td>
                <td>{Class.instructorEmail}</td>
                <td>{Class.availableSeats}</td>
                <td className="text-end">${Class.price}</td>
                <td>{Class.status}</td>
                <td>
                  {Class.status === "approved" || Class.status === "denied" ? (
                    <button className="btn btn-disabled btn-xs">
                      <FcApproval></FcApproval>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleApprove(Class)}
                      className="btn bg-green-200 btn-ghost btn-sm"
                    >
                      <FcApproval></FcApproval>
                    </button>
                  )}
                </td>
                <td>
                  {Class.status === "approved" || Class.status === "denied" ? (
                    <button className="btn btn-disabled btn-xs">
                      <FcCancel></FcCancel>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDeny(Class)}
                      className="btn bg-green-200 btn-ghost btn-sm"
                    >
                      <FcCancel></FcCancel>
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/dashboard/feedback/${Class._id}`}><button className="btn bg-green-100 btn-ghost btn-sm">
                    <FcFeedback></FcFeedback>
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;
