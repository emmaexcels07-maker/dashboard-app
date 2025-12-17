import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <Login />;
}
export default App;