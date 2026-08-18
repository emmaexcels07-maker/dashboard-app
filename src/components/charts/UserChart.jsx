import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "../ui/Card.jsx";

const UserChart = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <Card>
                <h3>Users</h3>
                <p className="no-data">No user data available</p>
            </Card>
        );
    }

    return (
        <Card>
            <h3>Users</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8b5cf6" />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default UserChart;
