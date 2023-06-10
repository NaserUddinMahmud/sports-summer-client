import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import image from "../../assets/undraw_secure_login_pdn4.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // const password = watch('password');

  const onSubmit = (data) => {
    setError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {name: data.name, email: data.email}
            fetch("http://localhost:5000/users", {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  navigate(from, { replace: true });
                  Swal.fire({
                    icon: "success",
                    title: "User Created Successfully!",
                  });
                }
              });
          })
          .catch((error) => console.log(error));
        setError(error.message);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
        fetch("http://localhost:5000/users", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
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

  return (
    <div>
      <div className="hero min-h-screen mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-3/5 lg:w-3/12">
            <h1 className="text-2xl lg:text-4xl font-bold text-center ps-8">
              Please <br /> Sign Up!
            </h1>
            <img src={image} alt="" />
          </div>
          <div className="card w-80 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      Name is required
                    </span>
                  )}
                </div>
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
                    required
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 text-sm">
                      Password must be at least 6 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500 text-sm">
                      Password must have at least one uppercase and one special
                      character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    name="confirmPassword"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    name="photoURL"
                    className="file-input file-input-ghost file-input-bordered w-full max-w-xs px-5"
                  />
                  {errors.photoURL && (
                    <span className="text-red-500 text-sm">
                      Photo URL is required
                    </span>
                  )}
                </div>
                <p className="text-red-500 text-sm">{error}</p>
                <div className="form-control mt-2">
                  <button className="btn btn-success">Sign Up</button>
                </div>
              </div>
            </form>
            <div className="divider w-3/4 mx-auto">or</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline rounded-full btn-success mb-6 mx-8"
            >
              {" "}
              <FcGoogle /> <span className="pl-2">Sign In with Google</span>
            </button>

            <p className="text-red-500 text-sm px-5">{error}</p>
            <p className="px-10 pb-10">
              <small>
                Already have an account?{" "}
                <Link to="/login" className=" btn-link">
                  Sign In!
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
