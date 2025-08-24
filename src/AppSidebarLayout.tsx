import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/common/Sidebar";

export const AppSidebarLayout: React.FC = () => {

  return (
    <div className="grid grid-cols-5 flex-1 md:px-8 mt-20">
      <Sidebar />
      <main className={`p-4 h-full col-span-4`}>
        <Outlet />
      </main>
    </div>
  );
};
