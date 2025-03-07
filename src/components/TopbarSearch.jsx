import { MdSearch } from "react-icons/md";

const TopbarSearch = ({ searchTerm, onChange }) => {
  return (
    <div className="focus-within:bg-[#f2f2f2] bg-[#f5f7fa] gap-4 rounded-full w-full lg:w-[255px] flex items-center px-[10px] h-[40px] lg:h-[50px]">
      <div className="flex items-center">
        <MdSearch className=" h-6 w-6 text-[#718EBF]" />
      </div>
      <div className="flex items-center flex-1">
        <input
          type="text"
          placeholder="Search for something"
          value={searchTerm}
          onChange={onChange}
          className="search bg-transparent border-none outline-none w-full tracking-tight text-[#718EBF]"
        />
      </div>
    </div>
  );
};

export default TopbarSearch;
