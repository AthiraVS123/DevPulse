import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const LanguagePieChart = ({ data }) => {
  const chartData = data || [
    { name: "TypeScript", value: 45 },
    { name: "JavaScript", value: 30 },
    { name: "Python", value: 15 },
    { name: "HTML/CSS", value: 10 },
  ];

  const COLORS = ["#3b82f6", "#facc15", "#38bdf8", "#fb7185"];

  return (
    <div style={{
    width: "100%",
    height: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
          
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
            >
          
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: "#111827",
              border: "1px solid #7c3aed",
              borderRadius: "10px",
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguagePieChart;