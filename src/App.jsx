import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RestaurantProvider } from "./context/RestaurantContext";
import Login from "./pages/login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/Customerdashboard";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import CustomerRoute from "./routes/CustomerRoute";


export default function App(){
  return(
    <AuthProvider>
      <RestaurantProvider>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/admin/dashboard" 
      element = {
        <PrivateRoute>
            <AdminRoute>
              <AdminDashboard>
               </AdminDashboard>
          </AdminRoute>
          </PrivateRoute>
      } />
      <Route path = "/admin/restaurants/update/:id"
      element = {
        <PrivateRoute>
          <AdminRoute>
            <UpdateRestaurant/>
          </AdminRoute>
        </PrivateRoute>
      } />
      <Route path = "/customer/dashboard" 
      element = {
        <PrivateRoute>
          <CustomerRoute>
            <CustomerDashboard/>
          </CustomerRoute>
        </PrivateRoute>
      } />
      </Routes></BrowserRouter></RestaurantProvider>
    </AuthProvider>
  )
}