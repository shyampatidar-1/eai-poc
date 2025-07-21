import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { NOAVAILABILITYADDED } from "../../utils/aap-image-constant";

function SimpleBarChart({ chartData = [], doctorCount = 0 }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return chartData.length === 0 ? (
    <div className="text-center">
      <img
        src={NOAVAILABILITYADDED}
        alt="icon"
        className="modelsuccessimg mb-2"
      />
      <h2 className="tableheading fs-18 mb-2 fw-500">Data not found!</h2>
    </div>
  ) : (
    <>
      <h3 className="fw-600 fs-55 mb-md-4 mb-0">{doctorCount}</h3>
      <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={chartData}
            margin={{ top: 50, right: 0, left: 0, bottom: 60 }}
          >
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              tickMargin={10}
              axisLine={false}
              tickLine={false}
              interval={0}
              style={{ fill: "#458FF0", fontSize: isMobile ? 10 : 12 }}
            />
            <Tooltip
              cursor={false}
              formatter={(value) => [`${value}`, "Count"]}
              labelFormatter={(label, payload) => {
                const data = payload?.[0]?.payload;
                return data?.fullName || label;
              }}
              contentStyle={{
                backgroundColor: "rgb(234, 237, 243)",
                borderRadius: "20px",
              }}
            />
            <Bar
              dataKey="Count"
              fill="#458FF0"
              barSize={isMobile ? 17 : 40}
              radius={[10, 10, 10, 10]}
            >
              <LabelList dataKey="Count" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default SimpleBarChart;
