import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/common/Sidebar";

export const AppSidebarLayout: React.FC = () => {
  return (
    // Keep mt-20 if your header sits above. h-[calc(100vh-5rem)] constrains the viewable area.
    <div className="flex flex-1 md:px-8">
      <Sidebar />
      {/* main becomes the scroll container for content */}
      <main className="px-3 sm:px-6 h-full pb-8 w-full">
        <Outlet />
      </main>
    </div>
  );
};
