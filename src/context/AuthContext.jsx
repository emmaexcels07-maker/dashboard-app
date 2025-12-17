import { createContext, useContext, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../services/firebase";
import { app } from "./../services/firebase";

export const AuthProvider = ({ children }) => {
useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
  return unsub;
}, []);

const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const AuthContext = createContext();


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
