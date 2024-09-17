import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = ({ openSignup }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
        try {
      const response = await axios.post('http://localhost:5000/chat/user/login', {username, password})
      console.log(response)
      if(response.data.msg === "success"){
        window.localStorage.setItem('chat-token', response.data.token)
        window.localStorage.setItem('userId', response.data.user._id)
        navigate('/chat')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-dray-700">Remember me</span>
          </label>
          <a href="#" className="text-blue-600">
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don't have an Account?</span>
        <button className="text-blue-800" onClick={openSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
