import useFetchData from "../hooks/useFetchData";
import SummaryCard from "./SummaryCard";
import Transactions from "./Transactions";

function Card() {
  const { data: cards, error, loading } = useFetchData("card-list");
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="px-8 py-10 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="flex justify-between items-center pb-4">
              <p className="font-semibold text-[16px] text-[#343C6A] md:text-[22px]">
                My Cards
              </p>
              <p className="font-semibold text-[14px] text-[#343C6A] md:text-[17px]">
                See All
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
              {cards &&
                cards
                  .slice(0, 2)
                  .map((card, index) => (
                    <SummaryCard key={index} index={index + 1} data={card} />
                  ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Transactions />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
