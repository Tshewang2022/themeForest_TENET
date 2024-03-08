import { Routes, Route } from "react-router-dom";
import RootLayout from "./_roots/RootLayout";
import {
  Home,
  AboutUs,
  Services,
  Projects,
  Pages,
  ContactUs,
} from "./_roots/pages";
const App = () => {
  return (
    <div>
      {/* === CREATING THE ROUTING FOR THE PAGES === */}
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sevices" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
