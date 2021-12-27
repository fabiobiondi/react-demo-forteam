import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { PageExample } from "./pages/PageExample";
import { Products } from './pages/Products';
import { Home } from './pages/Home';
import { ProductDetails } from "./pages/ProductDetails";
import { Contacts } from "./pages/Contacts";

function App() {

  return (
    <BrowserRouter>
      <div className="m-3">

        <Link to="products" className="btn btn-primary">Products</Link>
        <Link to="page-example" className="btn btn-primary">Page Example</Link>
        <Link to="home" className="btn btn-primary">home</Link>    
        <Link to="contacts" className="btn btn-primary">Contacts</Link>    
        <hr />

        <Routes>
          <Route path="contacts" element={<Contacts />} />
          <Route path="products" element={<Products /> } />
          <Route path="products/:productId" element={<ProductDetails /> } />
          <Route path="page-example" element={<PageExample /> } />
          <Route path="home" element={<Home /> } />
          <Route path="/" element={ <Navigate to="home" /> } />

          <Route path="*" element={
            <div>
              Page not found
              <hr />
              <Link className="btn btn-primary" to="/">Back to home</Link>
            </div>
          } />

        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;



