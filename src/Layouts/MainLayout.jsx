import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen mt-4">
      <Navbar />
      <div className="w-full mx-auto py-4 md:py-8 lg:py-12 flex-1 bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
