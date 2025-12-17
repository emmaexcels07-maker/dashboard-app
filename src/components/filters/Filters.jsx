import { useDashboard } from "../../context/DashboardContext";

const Filters = () => {
  const { category, setCategory } = useDashboard();

  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option>All</option>
      <option>Electronics</option>
      <option>Clothing</option>
    </select>
  );
};

export default Filters;
