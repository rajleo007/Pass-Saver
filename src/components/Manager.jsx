import React, { useEffect } from "react";
import { BiSolidShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid'

const Manager = () => {
  const [form, setForm] = useState({ site: " ", username: " ", password: " " });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordArray, setPasswordArray] = useState([]);
  const ref = useRef();
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const savepassword = () => {
    const newPassword = { ...form, id: uuidv4() };
    const updatedPasswords = [...passwordArray, newPassword];
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  
    // Reset the form after saving
    setForm({ site: "", username: "", password: "" });
  };
  
  const deletepassword = (id) => {
    const updatedPasswords = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    alert("Password deleted successfully")
    setForm({ site: "", username: "", password: "" });
  };
  const editpassword = (id) => {
    const passwordToEdit = passwordArray.find((item) => item.id === id);
    setForm(passwordToEdit); // This will pre-fill the form with the selected password's details
    alert("Password edited")
  };
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="container mx-auto p-4 min-h-[85.9vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">Op/&gt;</span>
        </h1>
        <p className="text-green-500 text-lg text-center">
          Your Own Password Manager
        </p>

        <div className="flex flex-col p-4 text-black gap-4 items-center">
          {/* Responsive form fields */}
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-2 md:p-4 py-2"
            type="text"
            placeholder="Enter website URL"
            name="site"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-2 md:p-4 py-2"
              type="text"
              name="username"
            />
            <div className="relative w-full">
              <input
                value={form.password}
                onChange={handleChange}
                ref={ref}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-2 md:p-4 py-2"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
              />
              <span
                className="absolute right-0 top-1 pr-2 pt-2 md:pt-3 cursor-pointer"
                onClick={showPassword}
              >
                {isPasswordVisible ? (
                  <BiSolidShow size={25} />
                ) : (
                  <FaEyeSlash size={25} />
                )}
              </span>
            </div>
          </div>
          <button
            onClick={savepassword}
            className="flex justify-center items-center bg-green-400 rounded-full px-4 py-2 w-fit hover:bg-green-200 gap-4"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="password w-full overflow-x-auto">
          <h2 className="font-bold text-xl py-4 text-center">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="text-center min-w-32 py-2 border border-white">
                        <a href={item.site}>{item.site}</a>
                      </td>
                      <td className="text-center min-w-32 py-2 border border-white">
                        {item.username}
                      </td>
                      <td className="text-center min-w-32 py-2 border border-white">
                        {item.password}
                      </td>
                      <td className="flex text-center py-2 border border-white justify-center gap-6">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => editpassword(item.id)}
                        >
                          <CiEdit size={25} />
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => deletepassword(item.id)}
                        >
                          <MdDelete size={25} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
