import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Onboarding from "./Pages/Onboarding/Onboarding ";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Account from "./Pages/Account/Account";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  const location = useLocation();

  // Pages where Navbar should NOT show
  const hideNavbarRoutes = ["/", "/login", "/signup"];
  const hideFooterRoutes = ["/", "/login", "/signup"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<MyOrder />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
{!shouldHideNavbar && <Footer />}
      
    </>
  );
}

export default App;
