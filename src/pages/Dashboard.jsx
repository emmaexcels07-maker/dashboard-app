import { useDashboard } from "../context/DashboardContext";
import Filters from "../components/filters/Filters";
import SalesChart from "../components/charts/SalesChart";
import UserChart from "../components/charts/UserChart";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  const { sales, users, loading, error } = useDashboard();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Navbar />
        <div className="dashboard-main">
          <Filters />
          <div className="grid">
            <SalesChart data={sales} />
            <UserChart data={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
