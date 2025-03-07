import { FaSearchengin } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ toggleSidebar }) {
  return (
    <header className="px-8 py-4 border-[1px] shadow-md md:hidden">
      <div className="container">
        <div className="grid gap-4">
          <div className="grid grid-cols-3 justify-between items-center">
            <RxHamburgerMenu size={24} onClick={() => toggleSidebar()} />
            <p className="font-semibold text-xl text-[#343C6A]">Overview</p>
            <div className="justify-self-end">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-white"
                src="/assets/avatar.svg"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="relative w-full max-w-md ">
            <input
              type="text"
              placeholder="Search for something"
              className="w-full pl-10 pr-4 py-2 border bg-[#F5F7FA] border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#8BA3CB] placeholder:text-[13px]"
            />
            <MdSearch className="absolute left-3 top-3 h-5 w-5 text-[#718EBF]" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
