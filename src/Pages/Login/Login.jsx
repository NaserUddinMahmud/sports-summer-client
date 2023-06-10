import { useContext, useState } from "react";
import { FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import image from "../../assets/undraw_secure_login_pdn4.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
      setError("");
      reset();
      Swal.fire({
        icon: "success",
        title: "Sign In Successful!",
      });
    })
    .catch((error) => {
      console.log(error.message);
      setError(error.message);
    });
  };

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Sign In Successful!",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="hero min-h-screen mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-3/5 lg:w-3/12">
            <h1 className="text-2xl lg:text-4xl font-bold text-center ps-8">
              Please <br /> Sign In!
            </h1>
            <img src={image} alt="" />
          </div>
          <div className="card w-80 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">Email is required</span>
                  )}
                  
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                      })}
                      name="password"
                      placeholder="password"
                      className="input input-bordered mr-5"
                    />

                    <span onClick={togglePasswordVisibility}>
                      {passwordVisible ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </span>
                  </div>
                  {errors.password?.type === "required" && 
                    <span className="text-red-500 text-sm">Password is required</span>
                  }
                  {errors.password?.type === "minLength" && 
                    <p className="text-red-500 text-sm">
                      Password must be at least 6 characters
                    </p>
                  }
                  {errors.password?.type === "pattern" && 
                    <p className="text-red-500 text-sm">
                      Password must have at least one uppercase and one special
                      character.
                    </p>
                  }
                </div>
                <div className="form-control mt-5">
                  <button className="btn btn-success">Sign in</button>
                </div>
              </div>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success mx-8 mb-6"
            >
              <FaGoogle /> <span className="pl-2">Sign in with Google</span>
            </button>

            <p className="text-red-500 text-sm px-10 pb-5">{error}</p>
            <p className="px-10 pb-10">
              <small>
                {" "}
                New to Sports Summer?{" "}
                <Link to="/signUp" className=" btn-link">
                  Sign Up!
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
