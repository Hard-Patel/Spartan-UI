import { Outlet, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTopOnLoad";
import { Sidebar } from "./components/common/Sidebar";
import { Navigation } from "./components/ui/navigation";

export const AppLayout: React.FC = () => {
  const location = useLocation();

  // Show sidebar only for /components and /components/:id
  const showSidebar = location.pathname.includes("/components");

  return (
    <div className="flex font-text min-w-screen overflow-hidden overscroll-x-none flex-col">
      <Navigation />

      <ScrollToTop />

      <div className="grid grid-cols-5 flex-1 md:px-8 mt-20">
        <Sidebar />
        <main className={`p-4 h-full col-span-4`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
