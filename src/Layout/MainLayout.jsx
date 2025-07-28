import { Outlet , ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className=" flex flex-col min-h-screen overflow-y-hidden overflow-x-hidden font-pop bg-slate-100 text-darkText">
      <Navbar />
      <main className="flex-1">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}