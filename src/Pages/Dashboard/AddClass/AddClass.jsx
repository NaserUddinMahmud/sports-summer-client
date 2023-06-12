import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const{user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, availableSeats, instructor, instructorEmail } = data;
          const newClass = {
            name,
            price: parseFloat(price),
            availableSeats: parseFloat(availableSeats),
            instructor,
            instructorEmail,
            image: imgURL,
          };
          axiosSecure.post("/classes", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Class added successfully"
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}  className="grid md:grid-cols-2 gap-4">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full "
          />{errors.name && (
            <span className="text-red-500 text-sm">Class Name is required</span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Class Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />{errors.image && (
            <span className="text-red-500 text-sm">An image is required</span>)}
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input
            type="text"
            value={user.displayName}
            {...register("instructor", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="text"
            value={user.email}
            {...register("instructorEmail", { required: true })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Available Seats</span>
          </label>
          <input
            type="number"
            {...register("availableSeats", { required: true })}
            placeholder="Available Seats"
            className="input input-bordered w-full "
          />{errors.availableSeats && (
            <span className="text-red-500 text-sm">Available Seat is required</span>)}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered w-full "
          />{errors.price && (
            <span className="text-red-500 text-sm">Price is required</span>)}
        </div>
        

     

        <input className="btn btn-sm bg-green-200 mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddItem;
