import { MdClose } from "react-icons/md";
import Navbar from "./Navbar";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`md:col-span-3 z-10 col-span-12 w-full bg-white flex flex-col h-full border-r border-[#e6eff5] fixed top-0 left-0 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:block`}
    >
      <div className="topbar-min-h flex items-center justify-center border-b-2">
        <a href="#" className="flex items-center justify-center">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="w-[36px] m-[10px]"
          />
          <h2 className="text-[25px] text-[#343c6a] font-extrabold">
            BankDash.
          </h2>
        </a>
        <a
          href="#"
          onClick={toggleSidebar}
          className="md:hidden absolute right-[20px]"
        >
          {/* <img src="/assets/icons/close.svg" alt="Close" />
           */}
          <MdClose size={24} />
        </a>
      </div>

      <Navbar />
    </aside>
  );
};

export default Sidebar;
