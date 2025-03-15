import { Outlet } from "react-router-dom";
import MainNavbar from "./shared/MainNavbar";
import DashboardNavbar from "./shared/DashboardNavbar";

export default function App() {
  return (
    <section className="">
      <div className="px-10">
      <Outlet  />
      </div>
    </section>
  );
}
