import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AsadorDePaco from "./pages/AsadorDePaco";
import Beaches from "./pages/Beaches";
import Festivals from "./pages/Festivals";
import Location from "./pages/Location";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./pages/widgets/ScrollToTop"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/Vejer/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/asador-de-paco" element={<AsadorDePaco />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);