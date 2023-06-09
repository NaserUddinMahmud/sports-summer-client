import { Link } from "react-router-dom";
import Banner from "../Banner";
import ClassesSection from "../ClassesSection";
import InstructorsSection from "../InstructorsSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ClassesSection></ClassesSection>
      <Link to={'/classes'}>
      <button className="btn btn-success rounded-2xl mx-auto flex justify-center my-4">View All Classes</button>
      </Link>
      <InstructorsSection></InstructorsSection>
      <Link to={'/Instructors'}>
        <button className="btn btn-success rounded-2xl mx-auto flex justify-center my-4">
          View All Instructors
        </button>
      </Link>
    </div>
  );
};

export default Home;
