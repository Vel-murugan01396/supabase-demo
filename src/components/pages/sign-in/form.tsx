import React, { useState } from "react";

export const SignInForm = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-white">Email</label>
          <input
            className="bg-transparent p-2 border-gray-600 border-2 border-solid rounded-lg text-white"
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Password</label>
          <input
            className="bg-transparent p-2 border-gray-600 border-2 border-solid rounded-lg text-white"
            type="text"
            placeholder="*******"
          />
        </div>
        <button className="p-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-400">
          Sign In
        </button>
      </form>
    </>
  );
};

// function SignInForm() {}

export default SignInForm;
