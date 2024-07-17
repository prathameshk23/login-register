import { useAuth } from "../context/AuthContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useAuth();
  const { logout } = useLogout();
  return (
    <div className="flex justify-between items-center p-3 bg-gray-200">
      <div>User: {user?.data.name}</div>
      <button onClick={logout} className="bg-red-300 py-2 px-8 rounded-md">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
