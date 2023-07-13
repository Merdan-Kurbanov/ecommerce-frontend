import Login from './componets/Login'
import { Route, Routes,useLocation } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import Products from './componets/Products';
import ProductDetails from './componets/Productdetail';
import Navbar from './componets/Navbar';



function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';


  return (
    <div className='w-[100%] h-[100%]'>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route
          path="/allProducts"
          element={
            <RequireAuth loginPath="/login">
              <Products />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/productDetail/:id"
          element={
            <RequireAuth loginPath="/login">
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}


export default App
