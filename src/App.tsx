
import Login from './componets/Login'
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import Products from './componets/Products';



function App() {
  return (
    <div className='w-[100%] h-[100%]'>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Products />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}


export default App
