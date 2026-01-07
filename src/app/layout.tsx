import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar/navbar";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main>
      <ReactQueryProvider>
      <Navbar/>
      <Outlet />
      <Footer/>
      </ReactQueryProvider>
    </main>
  );
}
