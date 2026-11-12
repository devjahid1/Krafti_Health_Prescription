
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#F5F9FA]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen md:ml-[250px]">
        {/* Navbar */}
        <Navbar/>

        {/* Page Content */}
        <main className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
