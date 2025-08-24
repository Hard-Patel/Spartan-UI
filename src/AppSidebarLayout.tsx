import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/common/Sidebar";

export const AppSidebarLayout: React.FC = () => {
  return (
    // Keep mt-20 if your header sits above. h-[calc(100vh-5rem)] constrains the viewable area.
    <div className="grid grid-cols-5 flex-1 md:px-8 mt-[var(--header-height)] h-[calc(100vh-var(--header-height))]">
      <Sidebar />
      {/* main becomes the scroll container for content */}
      <main className="px-4 col-span-4 overflow-y-hidden h-full">
        <Outlet />
      </main>
    </div>
  );
};
