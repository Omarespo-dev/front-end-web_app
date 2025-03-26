// importiamo i Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il defaultlayout
import DefaultLayout from "./layouts/DefaultLayout";

// Importiamo Page
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";

function App() {
  
  return (
    <>
    
    <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/allproducts" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
