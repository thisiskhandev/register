import React, { useRef } from "react";

const Register = () => {
  // It is same is usestate but can't rerender
  const ref = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };
  return (
    <>
      <main className="container py-5 mx-auto text-center">
        <h1>Register</h1>
        <form action="" className="the_form" onSubmit={submitForm}>
          <input
            type="text"
            name="fname"
            placeholder="Full Name"
            className="input input-bordered w-full mb-5"
            id="fname"
            ref={ref}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="input input-bordered w-full mb-5"
          />
          <input
            type="password"
            name="pwd"
            placeholder="Password"
            className="input input-bordered w-full mb-5"
          />
          <button
            className="btn btn-outline btn-success w-full mb-3"
            type="submit"
          >
            Submit
          </button>
          {/* <button
            className="btn btn-error w-full mb-3"
            onClick={(bro) => bro.target.value.reset()}
          >
            Reset
          </button> */}
        </form>
        <h6>
          Already have account? <a href="#">Sign In</a>
        </h6>
      </main>
    </>
  );
};

export default Register;
