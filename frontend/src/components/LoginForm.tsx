import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { CircleUser, Lock, User } from "lucide-react";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isError, isPending } = useLogin();

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div>
      <div className="h-[50vh] w-[22vw] bg-[#1d2c4f] relative flex flex-col items-center justify-center rounded-md shadow-2xl shadow-black ">
        <div className="absolute flex bg-[#00f5e1] py-4 px-8 top-[-2vh] rounded-md">
          SIGN IN
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
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="p-2 rounded-md text-white bg-transparent placeholder-[#7a839e] decoration-0 focus:outline-none w-full focus:bg-transparent"
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
                className="p-2 rounded-md bg-transparent text-white placeholder-[#7a839e] decoration-0 focus:outline-none w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isPending && <div className="text-white">Loading...</div>}
            {isError && <div className="text-white">{error}</div>}
            <div>
              <Link to="/signup" className="text-cyan-400 text-sm">
                Sign up
              </Link>
            </div>
            <button className="bg-cyan-300 p-2 rounded-md mt-4" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
