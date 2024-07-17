import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { CircleUser, User, Lock, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const { signup, error, isError, isPending } = useSignup();

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    signup({ email, name, password, dob });
  };

  return (
    <div>
      <div className="h-[65vh] w-[22vw] bg-[#1d2c4f] relative flex flex-col items-center justify-center rounded-md shadow-2xl shadow-black ">
        <div className="absolute flex bg-[#00f5e1] py-4 px-8 top-[-2vh] rounded-md">
          SIGN UP
        </div>
        <div className="text-[#7a839e]">
          <CircleUser size={100} />
        </div>
        <form onSubmit={createUser}>
          <div className="flex flex-col p-2 gap-4">
            <div className="flex justify-center items-center bg-[#4d5974] rounded-md py-1 px-2 w-full">
              <div className="text-[#7a839e]">
                <User size={24} />
              </div>
              <input
                value={name}
                type="name"
                name="name"
                id="name"
                placeholder="name"
                className="text-white p-2 rounded-md bg-transparent placeholder-[#7a839e] decoration-0 focus:outline-none w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center bg-[#4d5974] rounded-md py-1 px-2 w-full">
              <div className="text-[#7a839e]">
                <Mail size={24} />
              </div>
              <input
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="text-white p-2 rounded-md bg-transparent placeholder-[#7a839e] decoration-0 focus:outline-none w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center bg-[#4d5974] rounded-md py-1 px-2 w-full">
              <div className="text-[#7a839e]">
                <Lock size={24} />
              </div>
              <input
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="text-white p-2 rounded-md bg-transparent placeholder-[#7a839e] decoration-0 focus:outline-none w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center bg-[#4d5974] rounded-md py-1 px-2 w-full">
              <div className="text-[#7a839e]">
                <Calendar size={24} />
              </div>
              <input
                value={dob}
                type="text"
                name="dob"
                id="dob"
                className="text-white p-2 rounded-md bg-transparent placeholder-[#7a839e] decoration-0 focus:outline-none w-full"
                placeholder="Select a date" // Customize your placeholder text here
                onFocus={(e) => e.target.setAttribute("type", "date")}
                onBlur={(e) => e.target.setAttribute("type", "text")}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            {isPending && <div className="text-white">Loading...</div>}
            {isError && <div className="text-white">{error}</div>}
            <div>
              <Link to="/login" className="text-cyan-400 text-sm">
                Sign in
              </Link>
            </div>
            <button className="bg-cyan-300 p-2 rounded-md mt-4" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
