import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
