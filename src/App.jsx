// importiamo i Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";

// Importiamo Page
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/:category?" element={<Products />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
