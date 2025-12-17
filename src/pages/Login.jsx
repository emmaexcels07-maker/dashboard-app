import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="center">
      <h2>Business Dashboard</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
