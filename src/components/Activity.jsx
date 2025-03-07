import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useFetchData from "../hooks/useFetchData";
import Statistics from "./Statistics";

function Activity() {
  const { data, loading, error } = useFetchData("weekly-activity-list");

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    // <div>
    //   <p className="font-semibold text-[16px] text-[#343C6A] pb-2">
    //     Weekly Activity
    //   </p>
    //   <div className="h-[285px] w-[325px] mx-auto">
    //     {data && (
    //       <ResponsiveContainer width="100%" height="100%">
    //         <BarChart width={500} height={300} data={data}>
    //           <CartesianGrid />
    //           <XAxis dataKey="days" />
    //           <YAxis />
    //           <Tooltip />
    //           <Legend verticalAlign="top" align="right" />
    //           <Bar
    //             dataKey="deposit"
    //             fill="#1814F3"
    //             legendType="circle"
    //             radius={[10, 10, 10, 10]}
    //           />
    //           <Bar
    //             dataKey="withdraw"
    //             fill="#16DBCC"
    //             legendType="circle"
    //             radius={[10, 10, 10, 10]}
    //           />
    //         </BarChart>
    //       </ResponsiveContainer>
    //     )}
    //   </div>
    // </div>
    <section className="px-8 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 grid md:gap-[18px]">
            <div className="flex justify-between items-center pb-4">
              <p className="font-semibold text-[16px] text-[#343C6A] md:text-[22px]">
                Weekly Activity
              </p>
            </div>
            <div className="flex gap-4 overflow-hidden bg-[#fff] px-3 rounded-[25px]">
              <div className="h-[285px] w-[325px] md:w-full md:h-[322px] mx-auto">
                {data && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      barSize={12}
                      margin={{
                        top: 20,
                        right: 5,
                        left: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid />
                      <XAxis dataKey="days" />
                      <YAxis />
                      <Tooltip />
                      <Legend
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ marginBottom: 20 }}
                      />
                      <Bar
                        dataKey="deposit"
                        fill="#1814F3"
                        legendType="circle"
                        radius={[10, 10, 10, 10]}
                      />
                      <Bar
                        dataKey="withdraw"
                        fill="#16DBCC"
                        legendType="circle"
                        radius={[10, 10, 10, 10]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activity;
