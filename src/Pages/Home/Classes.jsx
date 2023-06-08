
import Card from "../../Components/Card";
import { Bounce } from "react-awesome-reveal";
import useClasses from "../../hooks/useClasses";
const Classes = () => {
    const [Classes] = useClasses()
  return (
    <div className="grid lg:grid-cols-3">
       <Bounce>
       {
        Classes.map(item => <Card key={item._id} item={item}></Card>)
       }
        
       </Bounce>
    </div>
  );
};

export default Classes;
