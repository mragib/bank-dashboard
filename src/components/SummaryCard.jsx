import { format } from "date-fns";
import { chip, chip_2 } from "../static";
import { formatCardNumber } from "../utill";

function SummaryCard({ index, data }) {
  if (index % 2 !== 0)
    return (
      <div className="min-w-[265px] h-[190px] md:h-[220px] md:w-full bg-linear-to-br from-[#4C49ED] to-[#0A06F4] rounded-2xl grid gap-4 pt-3">
        <div className="grid grid-cols-2 justify-between px-4 ">
          <div>
            <p className="text-[#fff] font-lato text-xs">Balance</p>
            <p className="text-[#fff] font-lato font-semibold md:text-[20px]">{`$${data.balance.toLocaleString()}`}</p>
          </div>
          <img className="justify-self-end" src={chip} alt="Chip" />
        </div>
        <div className="flex gap-14 px-2">
          <div className="grid ">
            <p className="text-[#fff]/70 font-lato text-[10px] uppercase md:text-[12px]">
              Card Holder
            </p>
            <p className="text-[#fff] font-lato font-semibold text-[13px] md:text-[15px]">
              {data.name}
            </p>
          </div>
          <div className="grid ">
            <p className="text-[#FFFFFF]/70 font-lato text-[10px] uppercase md:text-[12px]">
              Valid thru
            </p>
            <p className="text-[#fff] font-lato font-semibold text-[13px] md:text-[15px]">
              {format(data.validity, "MM/yy")}
            </p>
          </div>
        </div>
        <div className="bg-[#fff]/15 px-4">
          <div className="flex gap-[70px] py-3 justify-between items-center">
            <p className="font-lato font-semibold text-[15px] text-[#fff] md:text-[22px]">
              {formatCardNumber(data.card_number)}
            </p>
            <div className="relative flex ">
              <div className="rounded-full w-[19px] h-[19px] bg-[#fff]/50 "></div>
              <div className="absolute rounded-full w-[19px] h-[19px] bg-[#fff]/50 left-[-50%]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="min-w-[265px] bg-[#fff] md:w-full h-[190px] md:h-[220px]  rounded-2xl grid gap-4 pt-3 border-[1px] border-[#DFEAF2]">
        <div className="grid grid-cols-2 justify-between px-4 ">
          <div>
            <p className="text-[#718EBF] font-lato text-xs">Balance</p>
            <p className="text-[#343C6A] font-lato font-semibold md:text-[20px]">{`$${data.balance.toLocaleString()}`}</p>
          </div>
          <img className="justify-self-end" src={chip_2} alt="Chip" />
        </div>
        <div className="flex gap-14 px-4">
          <div className="grid ">
            <p className="text-[#718EBF]/70 font-lato text-[10px] uppercase md:text-[12px]">
              Card Holder
            </p>
            <p className="text-[#343C6A] font-lato font-semibold text-[13px] md:text-[15px]">
              {data.name}
            </p>
          </div>
          <div className="grid ">
            <p className="text-[#718EBF]/70 font-lato text-[10px] uppercase md:text-[12px]">
              Valid thru
            </p>
            <p className="text-[#343C6A] font-lato font-semibold text-[13px] md:text-[15px]">
              {format(data.validity, "MM/yy")}
            </p>
          </div>
        </div>
        <div className="bg-[#fff]/15 px-4 border-t-[1px] border-[#DFEAF2]">
          <div className="flex gap-[70px] items-center justify-between py-3 ">
            <p className="font-lato font-semibold text-[15px] text-[#343C6A] md:text-[22px] ">
              {formatCardNumber(data.card_number)}
            </p>
            <div className="relative flex ">
              <div className="rounded-full w-[19px] h-[19px] bg-[#9199AF]/50 md:w-[30px] md:h-[30px]"></div>
              <div className="absolute rounded-full w-[19px] h-[19px] bg-[#9199AF]/50 left-[-50%] md:w-[30px] md:h-[30px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SummaryCard;
