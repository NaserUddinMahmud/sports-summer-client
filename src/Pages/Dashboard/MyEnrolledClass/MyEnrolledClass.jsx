import useEnrolledClasses from "../../../hooks/useEnrolledClasses";

const MyEnrolledClass = () => {
  const [enrolledClasses] = useEnrolledClasses();
  console.log('enrolledClasses',enrolledClasses);

  return (
    <>
      {enrolledClasses.length > 0 ? (
        <div className="w-3/4">
          <div className="flex justify-evenly items-center w-full">
            <h2 className="text-3xl font-medium">
              Classes Enrolled: {enrolledClasses.length}
            </h2>
          </div>
          <div className="divider"></div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  
                 
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {enrolledClasses.map((enrolledClass, index) => (
                  <tr key={enrolledClass._id}>
                    <td>{index + 1}</td>
                    <td>
                      <p>{enrolledClass.className}</p>
                    </td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl font-medium">
          You have not enrolled in any class yet
        </h2>
      )}
    </>
  );
};

export default MyEnrolledClass;
