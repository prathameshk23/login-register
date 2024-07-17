import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch,
  useEffect,
} from "react";
import { Userdata } from "../types";

interface AuthState {
  user: Userdata | null;
}

interface LoginAction {
  type: "LOGIN";
  payload: Userdata;
}

interface LogoutAction {
  type: "LOGOUT";
}

type AuthAction = LoginAction | LogoutAction;

interface AuthContextType extends AuthState {
  dispatch: Dispatch<AuthAction>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  dispatch: () => null,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: "LOGIN", payload: JSON.parse(user) });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
