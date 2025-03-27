// importiamo i Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";

// Importiamo Page
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/:category?" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
