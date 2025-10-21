import { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

function App() {
  return (
    <div>
      <Header />

      <Outlet />
      <Whatsapp />

      <Footer />
    </div>
  );
}
export default App;
