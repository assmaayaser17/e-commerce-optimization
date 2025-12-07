import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main>
      <Navbar/>
      <Outlet />
      <Footer/>
    </main>
  );
}
