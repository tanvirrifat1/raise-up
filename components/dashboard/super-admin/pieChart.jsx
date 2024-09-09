"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#0A71B9", "#6AD2FF", "#EFF4FB"];

const CUSTOM_PERCENTAGES = {
  "Group A": 63,
  "Group B": 25,
  "Group C": 23,
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const customPercentage = CUSTOM_PERCENTAGES[payload.name];

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${customPercentage}%`}
    </text>
  );
};

const PieChartComponent = () => {
  return (
    <ResponsiveContainer
      width="100%"
      // height="30%"

      className="bg-white rounded-xl relative"
    >
      <div className="absolute top-0 left-0 p-5">
        <p className="text-lg font-bold text-brightBlue">Revenue</p>
      </div>
      <div className="absolute top-0 right-0 p-5">
        <div className="flex items-center text-deepGray">
          <p className="p-2">Monthly</p>
          <IoMdArrowDropdown />
        </div>
      </div>

      <div className="bg-white ">
        <div className="absolute bottom-0 left-0 p-5 ">
          <div className="flex items-center gap-1">
            <RiCheckboxBlankCircleFill className="text-primary" />
            <p className="p-2">
              Affiliate <br />
              <span className="text-brightBlue text-xl font-bold">63%</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-5 ">
          <div className="flex items-center gap-1">
            <RiCheckboxBlankCircleFill className="text-skyBlue" />
            <p className="p-2 text-deepGray">
              Online <br />
              <span className="text-brightBlue text-xl font-bold">25%</span>
            </p>
          </div>
        </div>
      </div>

      <PieChart width={700} height={700}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
