import { useQuery } from "@tanstack/react-query";
import { FcSportsMode, FcBusinessman } from "react-icons/fc";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure =useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeInstructor = (user) => {
    fetch(`https://assignment-12-sports-summer-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an Instructor now.`,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    fetch(`https://assignment-12-sports-summer-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an Admin now.`,
          });
        }
      });
  };

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex justify-center">
                  {user.role === "instructor" ? (
                    <button className="btn btn-disabled btn-xs">
                      <FcSportsMode></FcSportsMode>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost bg-green-200 btn-sm"
                    >
                      <FcSportsMode></FcSportsMode>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <button className="btn btn-disabled btn-xs">
                      <FcBusinessman></FcBusinessman>
                    </button>
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)} className="btn bg-green-200 btn-ghost btn-sm">
                      <FcBusinessman></FcBusinessman>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
