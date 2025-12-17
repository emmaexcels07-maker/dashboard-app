import { LineChart, Line, XAxis, Tooltip } from "recharts";
import Card from "../ui/Card.jsx";

const SalesChart = ({ data }) => (
  <Card>
    <h3>Sales</h3>
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="date" />
      <Tooltip />
      <Line dataKey="amount" stroke="#6366f1" />
    </LineChart>
  </Card>
);

export default SalesChart;
