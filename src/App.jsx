import { useState } from "react";
import Activity from "./components/Activity";

import Card from "./components/Card";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Transfer from "./components/Transfer";
import Topbar from "./components/Topbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="md:bg-[#f5f5fa]">
      <div className="grid grid-cols-12 relative">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="col-span-12 md:col-span-9  ">
          <Topbar toggleSidebar={toggleSidebar} />
          <main>
            <Header toggleSidebar={toggleSidebar} />
            <Card />

            <Activity />

            <Transfer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
