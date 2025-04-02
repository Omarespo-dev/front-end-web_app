// importiamo i Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";

import { WishlistProvider } from "./context/WishlistContext";

// Importiamo Page
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Wishlist from "./pages/Wishlist";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <>
      <WishlistProvider>
        <BrowserRouter >
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/products/:category?" element={<Products />} />
              <Route path="/product/:slug" element={<ProductDetailsPage />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </>
  )
}

export default App
