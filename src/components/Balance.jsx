import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Balance() {
  const data = [
    { month: "Jul", value: 100 },
    { month: "Aug", value: 325 },
    { month: "Sep", value: 235 },
    { month: "Oct", value: 480 },
    { month: "Nov", value: 440 },
    { month: "Dec", value: 775 },
    { month: "Jan", value: 205 },
    { month: "Feb", value: 570 },
    { month: "Mar", value: 230 },
    { month: "Apr", value: 620 },
    { month: "", value: 595 },
  ];
  return (
    <div>
      <p className="font-semibold text-[16px] text-[#343C6A] pb-8 md:text-[22px]">
        Balance History
      </p>
      <div className="w-full h-[280px] mx-auto bg-[#fff] rounded-[25px] px-3 ">
        {data && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={730}
              height={250}
              data={data}
              margin={{
                top: 30,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#718EBF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DFE5EE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1814F3"
                strokeWidth={3}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default Balance;
