import React, { useState } from "react";
import NavbarItem from "./NavbarItems";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", name: "Dashboard" },
    { id: "transactions", name: "Transactions" },
    { id: "accounts", name: "Accounts" },
    { id: "investments", name: "Investments" },
    { id: "credit-cards", name: "Credit Cards" },
    { id: "loans", name: "Loans" },
    { id: "services", name: "Services" },
    { id: "my-priviledges", name: "My Priviledges" },
    { id: "settings", name: "Settings" },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className="flex flex-col py-[10px] space-y-[2px]">
      {navItems.map((item) => (
        <NavbarItem
          key={item.id}
          item={item}
          isActive={activeItem === item.id}
          onClick={handleItemClick}
        />
      ))}
    </nav>
  );
};

export default Navbar;
