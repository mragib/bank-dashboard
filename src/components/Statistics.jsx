import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useFetchData from "../hooks/useFetchData";

function Statistics() {
  const { data, loading, error } = useFetchData("expense-list");

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;

  const result =
    data &&
    Object.entries(data)
      .filter(([key]) => key !== "id")
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

  const COLORS = ["#1814F3", "#343C6A", "#FA00FF", "#FC7900"];

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Position inside the slice
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={x}
          y={y + 10}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={12}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        <text
          x={x}
          y={y - 6}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={11}
          className="capitalize"
        >
          {name}
        </text>
      </>
    );
  };

  return (
    <div>
      <p className="font-semibold text-[16px] text-[#343C6A] pb-2 md:text-[22px] md:pb-8">
        Expense Statistics
      </p>
      <div className="w-[325px] h-[280px] md:h-[322px] md:w-full mx-auto bg-[#fff] rounded-[25px]">
        {data && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={result}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={renderLabel}
                labelLine={false}
                stroke="#fff" // Creates separation between slices
                strokeWidth={3} // Increases gap effect
                paddingAngle={5}
              >
                {result.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default Statistics;
