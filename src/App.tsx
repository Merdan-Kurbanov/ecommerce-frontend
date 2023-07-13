import Login from './componets/Login'
import { Route, Routes,useLocation } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import ProductDetails from './componets/Productdetail';
import Navbar from './componets/Navbar';
import Pgrid from './componets/Pgrid';



function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';


  return (
    <div className='w-[100%] h-[100%] bg-white dark:bg-primary'>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route
          path="/allProducts"
          element={
            <RequireAuth loginPath="/login">
              <Pgrid />
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
