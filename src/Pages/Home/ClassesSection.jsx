import { Rotate } from "react-awesome-reveal";
import useClasses from "../../hooks/useClasses";
import ClassesCard from "../../Components/ClassesCard";

const ClassesSection = () => {
  const [Classes] = useClasses();
  const maxCards = 6; 
  let cardCount = 0;

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold mx-auto flex justify-center my-4">
          Popular Classes
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 ">
      <Rotate>
          {Classes.map((Class) => {
            if (Class.status === "approved" && cardCount < maxCards) {
              cardCount++; 
              return <ClassesCard key={Class._id} item={Class} />;
            } else {
              return null;
            }
          })}
        </Rotate>
      </div>
    </>
  );
};

export default ClassesSection;
