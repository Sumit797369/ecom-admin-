import React, { useState } from "react";
import axios from 'axios'
import { backendUrl } from "../App";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    const response = await axios.post(backendUrl+ '/api/user/admin',{email,password});
    console.log(response);
    
    

  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-28 pb-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200">

      {/* Premium Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-200">

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center mb-3 tracking-tight">
          Login to Admin Panel
        </h1>

        <p className="text-gray-600 text-center mb-8 text-sm">
          Login to continue access your admin panel.
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={onSubmitHandler}>

          {/* Name (Register Only) */}
          {/* {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          )} */}

          {/* Email */}
          <input
            type="email"
             onChange={(e)=>setEmail(e.target.value)} value={email}   
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Password */}
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)} value={password}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Forgot Password */}
          {/* {isLogin && (
            <p className="text-sm text-right text-gray-500 cursor-pointer hover:text-black transition">
              Forgot  Password?
            </p>
          )} */}

          {/* Main Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center gap-3 my-7">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-xs text-gray-500">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div> */}

        {/* Google Button (UI Only) */}
        {/* <button
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5"
          />
          Continue with Google
        </button> */}

        {/* Toggle */}
        {/* <p className="text-sm text-center mt-8 text-gray-600">
          {isLogin ? "New here?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold text-black cursor-pointer hover:underline"
          >
            {isLogin ? "Create Account" : "Login"}
          </span>
        </p> */}
      </div>
    </section>
  );
};

export default Login;