import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get("http://localhost:5000/chat/users", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("chat-token")}`,
          },
        });
        setUsers(users.data.users);
      } catch (error) {
        navigate("/");
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="w-1/4 bg-black p-4 bg-opacity-70 relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 border rounded"
      />
      {users.length > 0 ? (
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex items-center space-x-4 p-2 hover:bg-gray-300 cursor-pointer"
            >
              <img src="" alt="" className="w-10 h-10 rounded-full border" />
              <span className="text-white text-sm font-bold">
                {user.username}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-white font-bold">No Users</p>
        </div>
      )}
      <button className="fixed bottom-1 right-1 left-1 rounded hover:bg-blue-700 bg-blue-500 text-white p-2 absolute">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
