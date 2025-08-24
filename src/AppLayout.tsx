import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTopOnLoad";
import { Navigation } from "./components/ui/navigation";

export const AppLayout: React.FC = () => {
  return (
    <div className="flex font-text min-w-screen overflow-hidden overscroll-x-none flex-col">
      <Navigation />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};
