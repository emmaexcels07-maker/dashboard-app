export const fetchDashboardData = async () => {
  const res = await fetch("/data/mockData.json");
  return res.json();
};
