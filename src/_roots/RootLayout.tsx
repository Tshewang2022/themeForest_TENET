import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
