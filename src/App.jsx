import { Outlet } from "react-router-dom";
import MainNavbar from "./shared/MainNavbar";

export default function App() {
  return (
    <section className="px-10">
      <MainNavbar/>
      <Outlet />
    </section>
  );
}
