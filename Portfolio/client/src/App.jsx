import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import AppRoutes from "./Routes/appRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
