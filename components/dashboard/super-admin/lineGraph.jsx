"use client";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "SEP",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "OCT",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "NOV",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "DEC",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "JAN",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "FAB",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "MAR",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineGraph = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height="30%"
      className="bg-white pb-10 px-10 rounded-br-xl rounded-bl-xl"
    >
      <LineChart width={700} height={400} data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#0A71B9"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
