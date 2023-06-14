import useMyClasses from "../../../hooks/useMyClasses";

const MyClasses = () => {
  const [myClasses] = useMyClasses();
  console.log("myClasses", myClasses);

  const totalEnrolled = myClasses.reduce((sum, item) => sum + item.enrolledCount, 0);

  return (
    <>
      {myClasses.length > 0 ? (
        <div>
          <div className="flex justify-evenly items-center w-full">
            <h2 className="text-3xl font-medium">
              Classes Enlisted: {myClasses.length}
            </h2>
            <h2 className="text-3xl font-medium">
             Total Students Enrolled: {totalEnrolled}
            </h2>
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
                  <th>Avail. Seats</th>
                  <th>Status</th>
                  <th>Enrolled</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {myClasses.map((myClass, index) => (
                  <tr key={myClass._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={myClass.image} alt="class image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{myClass.name}</td>
                    <td>{myClass.price}</td>
                    <td>{myClass.availableSeats}</td>
                    <td>{myClass.status}</td>
                    <td>{myClass.enrolledCount}</td>
                    <td>{myClass.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl font-medium">
          You have not enlisted any class yet
        </h2>
      )}
    </>
  );
};

export default MyClasses;
