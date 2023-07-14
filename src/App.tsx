import Login from './componets/Login'
import { Navigate, Route, Routes,useLocation } from "react-router-dom";
import { RequireAuth ,useAuthUser} from "react-auth-kit";
import ProductDetails from './componets/Productdetail';
import Navbar from './componets/Navbar';
import Pgrid from './componets/Pgrid';
import AdminPage from './componets/Admin';
import Admin from './componets/Admin';
import ProductForm from './componets/ProductForm';



function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const auth = useAuthUser();
  {console.log(auth)}

  return (
    <div className='w-[100%] h-[100%] bg-white dark:bg-primary'>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={!auth ? <Navigate to="/login" /> : <Navigate to="/allProducts" />}
        />
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
        <Route
          path="/admin"
          element={
            <RequireAuth loginPath="/login">
              <Admin />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/productedit"
          element={
            <RequireAuth loginPath="/login">
              <ProductForm />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}


export default App
