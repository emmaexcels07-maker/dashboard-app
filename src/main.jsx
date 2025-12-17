import { AuthProvider } from "./context/AuthContext";
import { DashboardProvider } from "./context/DashboardContext";

<AuthProvider>
  <DashboardProvider>
    <App />
  </DashboardProvider>
</AuthProvider>
