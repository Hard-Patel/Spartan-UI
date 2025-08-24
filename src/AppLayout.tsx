import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTopOnLoad";
import { Navigation } from "./components/ui/navigation";

export const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};
