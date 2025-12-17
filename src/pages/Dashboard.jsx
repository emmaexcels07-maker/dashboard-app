import { useDashboard } from "../context/DashboardContext";

const Dashboard = () => {
  const { sales, users, loading } = useDashboard();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Filters />
      <div className="grid">
        <SalesChart data={sales} />
        <UsersChart data={users} />
      </div>
    </>
  );
};

export default Dashboard;
