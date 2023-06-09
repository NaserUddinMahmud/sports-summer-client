import Card from "../../Components/Card";
import { Rotate } from "react-awesome-reveal";
import useClasses from "../../hooks/useClasses";
const ClassesSection = () => {
  const [Classes] = useClasses();
  return (
    <>
    <div><h2 className="text-4xl font-bold mx-auto flex justify-center my-4">Popular Classes</h2></div>
    <div className="grid lg:grid-cols-3 gap-3 ">
      <Rotate>
        {Classes.map(Class => (
          <Card key={Class._id} item={Class}></Card>
        ))}
      </Rotate>
    </div>
    
    </>
  );
};

export default ClassesSection;
