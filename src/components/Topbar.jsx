import React, { useState } from "react";
import TopbarSearch from "./TopbarSearch";

const Topbar = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-white md:px-[40px] px-[26px] md:border-b md:border-[#e6eff5] hidden md:block w-full">
      <header className="topbar-min-h flex items-center justify-between font-inter">
        <a href="#" onClick={toggleSidebar} className="md:hidden">
          <img src="/assets/menu.svg" alt="Menu" />
        </a>
        <h1 className="font-semibold md:text-3xl text-lg text-[#343c6a]">
          Overview
        </h1>
        <div className="flex items-center gap-8">
          <div className="hidden lg:block">
            <TopbarSearch
              searchTerm={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <a href="#" className="topbar-icon">
            <img src="/assets/settings.svg" alt="Settings" />
          </a>
          <a href="#" className="topbar-icon">
            <img src="/assets/notification.svg" alt="Notifications" />
          </a>
          <img
            src="/assets/avatar.svg"
            alt="Avatar"
            className="rounded-full md:w-[60px] md:h-[60px] w-[35px] h-[35px] cursor-pointer"
          />
        </div>
      </header>
      <div className="block lg:hidden pb-4">
        <TopbarSearch searchTerm={searchTerm} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Topbar;
