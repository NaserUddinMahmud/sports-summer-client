import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const Class = useLoaderData();
  console.log(Class);

  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const body = { feedback };

    fetch(`https://assignment-12-sports-summer-server.vercel.app/classes/feedback/${Class._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `Thank you for your feedback.`,
          });
        }
      });
  };

  return (
    <div >
      <h2 className="text-xl font-bold mb-4">Class Feedback</h2>
      <p className="font-semibold">Name: {Class.name}</p>
      {Class.feedback && <p>Previous Feedback: {Class.feedback}</p>}

      <p className="mb-2">Status: {Class.status}</p>

      <form onSubmit={handleFeedback}>
        
          <textarea
            className="textarea textarea-bordered w-80 block"
            name="feedback"
            placeholder="Why has this class been approved/denied?"
          ></textarea>

          <input className="btn btn-sm bg-green-100 mt-2" type="submit" />
        
      </form>
    </div>
  );
};

export default Feedback;
