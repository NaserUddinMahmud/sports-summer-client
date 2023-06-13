import image from '../../assets/undraw_lost_re_xqjt.svg'
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16  text-gray-900">
      
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-xs text-center">
          <div>
            <img
              src={image}
              alt=""
            />
          </div>
          <h2 className="mb-8 font-semibold text-4xl text-green-300">
            <span className="font-semibold">You seem lost!</span>
            <span className="sr-only ">Error</span> {status || 404}!
          </h2>
          <p className="text-2xl font-semibold md:text-2xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn btn-outline btn-sm px-8  font-semibold rounded-2xl border-success text-gray-900"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
