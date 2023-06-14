import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../hooks/useSelectedClass";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const ClassesCard = ({ item }) => {
  const { _id, image, name, instructor, availableSeats, price } = item;
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const [selectedClasses,refetch] = useSelectedClass();
  const isClassSelected = selectedClasses.map(
    (selected) => selected.classId === _id
  );
  console.log("isClassSelected", isClassSelected);

  console.log("selectedClasses btn dsble", selectedClasses);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (item) => {
    const alreadySelectedClass = selectedClasses.find(
      (selected) => selected.classId === _id
    );
    const isAlreadySelected = Boolean(alreadySelectedClass);

    if (isAlreadySelected) {
      Swal.fire({
        icon: "warning",
        title: "Class Already Selected",
        text: "You have already selected this class.",
      });
      return;
    }

    console.log(item);
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              icon: "success",
              title: "Class Selected Successfully!",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select classes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div
        className={
          availableSeats === 0
            ? "card  card-compact w-80 h-96 bg-red-950 shadow-xl  mx-auto"
            : "card  card-compact w-80 h-96 bg-slate-700 shadow-xl  mx-auto"
        }
      >
        <figure>
          <img className="" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-green-400">
            {name}
          </h2>
          <p className="text-white">Instructor: {instructor}</p>
          <p className="text-white">Available Seats: {availableSeats}</p>
          <p className="text-white">Price: ${price}</p>
          <div className="card-actions justify-center">
            {isInstructor || isAdmin || availableSeats == 0 ? (
              <button
                onClick={() => handleSelect(item)}
                className="btn btn-sm btn-disabled bg-slate-600 text-gray-500 rounded-2xl"
              >
                Select
              </button>
            ) : (
              <button
                onClick={() => handleSelect(item)}
                className="btn btn-sm bg-slate-600 text-white rounded-2xl"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
