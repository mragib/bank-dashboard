import { format } from "date-fns";
import useFetchData from "../hooks/useFetchData";
import { BASE_IMAGE_URL, transactions_icons } from "../static";

function Transactions() {
  const { data, error, loading } = useFetchData("recent-transactions-list");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const formatData = data?.map((item, index) => {
    return {
      ...item,
      ...transactions_icons.at(index),
    };
  });

  return (
    <div>
      <p className="font-semibold text-[16px] text-[#343C6A] md:text-[22px] pb-4">
        Recent transaction
      </p>
      <div className="min-w-[325px] min-h-[214px] rounded-[15px] bg-[#fff] md:w-full">
        <div className="p-4">
          {formatData &&
            formatData.map((item) => {
              return (
                <div
                  className="grid grid-cols-12 py-1 items-center justify-between"
                  key={item.name}
                >
                  <div className="flex gap-4 col-span-10">
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                      <img
                        src={`${BASE_IMAGE_URL}images/${item.image}`}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className="text-[#232323]">{item.name}</p>
                      <p className="text-[#718EBF] text-[12px]">
                        {format(item.date, "dd MMMM yyyy")}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${
                      item.type === "withdraw"
                        ? "text-[#FF4B4A] "
                        : "text-[#41D4A8] "
                    } text-[11px] font-medium col-span-2`}
                  >
                    {`${
                      item.type === "withdraw" ? "-" : "+"
                    }$${item.amount.toLocaleString()}`}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
