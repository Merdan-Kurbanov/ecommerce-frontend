import Login from './componets/Login'
import { Navigate, Route, Routes,useLocation } from "react-router-dom";
import { RequireAuth ,useAuthUser} from "react-auth-kit";
import ProductDetails from './componets/Productdetail';
import Navbar from './componets/Navbar';
import Pgrid from './componets/Pgrid';
import Admin from './componets/Admin';
import ProductForm from './componets/ProductEdit';
import RoleProtectedRoute from './componets/RoleProtectedRoute';
import jwtDecode from 'jwt-decode';
import Cookies from "js-cookie";
import Unauthorized from './error/Unauthorized';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const auth = useAuthUser();
  
  const authtoken = Cookies.get('_auth') as string;
  let decoded = "User";
  if (authtoken) {
    decoded = jwtDecode(authtoken);
  }

  return (
    <div className='w-[100%] h-screen overflow-auto bg-white dark:bg-primary'>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={!auth ? <Navigate to="/login" /> : <Navigate to="/products"/>}
        />
        <Route
          path="/products"
          element={
            <RequireAuth loginPath="/login">
              <Pgrid />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products/:id"
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
              <RoleProtectedRoute
                userRole={decoded?.roleName}
                element={<Admin />}
              />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/productedit/:id"
          element={
            <RequireAuth loginPath="/login">
              <RoleProtectedRoute
                userRole={decoded?.roleName}
                element={<ProductForm />}
              />
            </RequireAuth>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}


export default App
