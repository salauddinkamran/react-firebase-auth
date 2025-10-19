import React, { use } from "react";
import { Link } from "react-router";
// import { auth } from "../firebase/firebase.init";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(name, email, password);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Register!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-400 underline" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
