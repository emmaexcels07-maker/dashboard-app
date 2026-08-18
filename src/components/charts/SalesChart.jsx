import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "../ui/Card.jsx";

const SalesChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Card>
        <h3>Sales</h3>
        <p className="no-data">No sales data available</p>
      </Card>
    );
  }

  return (
    <Card>
      <h3>Sales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Legend />
          <Line dataKey="amount" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SalesChart;
