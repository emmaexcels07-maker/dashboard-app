import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { fetchDashboardData } from "../services/api";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchDashboardData();
      setSales(data.sales || []);
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message || "Failed to load dashboard data");
      console.error("Error loading dashboard data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  const filteredSales =
    category === "All"
      ? sales
      : sales.filter((s) => s.category === category);

  const refreshData = useCallback(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  const value = {
    sales: filteredSales,
    users,
    category,
    setCategory,
    loading,
    error,
    refreshData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
