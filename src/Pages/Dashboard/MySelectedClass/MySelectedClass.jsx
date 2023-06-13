import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { FaTrashAlt } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [selectedClasses, refetch] = useSelectedClass();
  const fees = selectedClasses.reduce((sum, item) => sum + item.price, 0);
    console.log(10,selectedClasses);
  const handleDelete = (selectedClass) => {
    Swal.fire({
      title: "Are you sure you want delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClasses/${selectedClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-3/4">
      <div className="flex justify-evenly items-center w-full">
        <h2 className="text-3xl font-medium">
          Classes Selected: {selectedClasses.length}
        </h2>
        <div>
          <h2 className="text-2xl font-medium">Total Fees: ${fees}</h2>
          
        </div>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Class</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {selectedClasses.map((selectedClass, index) => (
              <tr key={selectedClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={selectedClass.image} alt="class image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{selectedClass.name}</td>
                <td className="text-end">${selectedClass.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${selectedClass._id}`}><button
                    className="btn bg-green-200 btn-sm text-white"
                  >
                    <FcMoneyTransfer></FcMoneyTransfer>
                  </button></Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(selectedClass)}
                    className="btn btn-error btn-xs text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
