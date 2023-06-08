import { Flip } from "react-awesome-reveal";
import useInstructors from "../../hooks/useInstructors";
import Card2 from "../../Components/Card2";


const InstructorsSection = () => {
    const [instructors] = useInstructors()
    return (
        <div>
            <>
    <div><h2 className="text-4xl font-bold mx-auto flex justify-center my-4">Popular Instructors</h2></div>
    <div className="grid lg:grid-cols-3 gap-3 ">
      <Flip>
        {instructors.map(instructor => (
          <Card2 key={instructor._id} item={instructor}></Card2>
        ))}
      </Flip>
    </div>
    <div >
      <button className="btn btn-success rounded-2xl mx-auto flex justify-center my-4">View All Instructors</button>
      </div>
    </>
        </div>
    );
};

export default InstructorsSection;