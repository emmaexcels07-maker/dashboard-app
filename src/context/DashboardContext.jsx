import { createContext, useContext, useEffect, useState } from "react";
import { fetchDashboardData } from "../services/api";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then((data) => {
      setSales(data.sales);
      setUsers(data.users);
      setLoading(false);
    });
  }, []);

  const filteredSales =
    category === "All"
      ? sales
      : sales.filter((s) => s.category === category);

  return (
    <DashboardContext.Provider
      value={{
        sales: filteredSales,
        users,
        category,
        setCategory,
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
