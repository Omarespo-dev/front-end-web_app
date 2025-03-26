// importiamo i Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";

// Importiamo Page
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/:category?" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
