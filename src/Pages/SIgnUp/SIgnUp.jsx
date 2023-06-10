import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import image from "../../assets/undraw_secure_login_pdn4.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
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
        reset();
        navigate(from, { replace: true });
        // updateUserData(user, name, photo);

        Swal.fire({
          icon: "success",
          title: "Sign Up Successful!",
        });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const photo = form.photo.value;
  //   console.log(name, email, password);

  //   setError("");
  //   if (password.length < 6) {
  //     setError("Password must be 6 characters or longer");
  //     return;
  //   }
  //   createUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       form.reset();
  //       navigate(from, { replace: true });
  //       updateUserData(user, name, photo);
  //       navigate(from, { replace: true });
  //       Swal.fire({
  //         icon: "success",
  //         title: "Sign Up Successful!",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setError(error.message);
  //     });
  // };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
        });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // const updateUserData = (user, name, photo) => {
  //   updateProfile(user, {
  //     displayName: name,
  //     photoURL: photo,
  //   })
  //     .then(() => {
  //       console.log("user profile updated");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", { required: true,validate: (value) => value === watch("password") || "Passwords do not match" })}
                    name="confirmPassword"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.confirmPassword && (
    <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
  )}
                 
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    className="file-input file-input-ghost file-input-bordered w-full max-w-xs px-5"
                  />
                </div>
                <p className="text-red-500 text-sm">{error}</p>
                <div className="form-control mt-2">
                  <button className="btn btn-success">Sign Up</button>
                </div>
              </div>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success mb-6 mx-8"
            >
              {" "}
              <FaGoogle /> <span className="pl-2">Sign In with Google</span>
            </button>

            <p className="text-red-600 px-5"></p>
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
