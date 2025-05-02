"use client";

import DashboardLayout from "./layout/dashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function StatisticsPage() {
  // Dummy data event per bulan
  const data = [
    { month: "Jan", events: 2 },
    { month: "Feb", events: 5 },
    { month: "Mar", events: 3 },
    { month: "Apr", events: 7 },
    { month: "May", events: 4 },
    { month: "Jun", events: 6 },
    { month: "Jul", events: 8 },
    { month: "Aug", events: 5 },
    { month: "Sep", events: 3 },
    { month: "Oct", events: 6 },
    { month: "Nov", events: 2 },
    { month: "Dec", events: 4 },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Event Statistics (Preview)</h1>
      <div className="w-full h-[400px] bg-white p-4 shadow rounded">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="events"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
}
