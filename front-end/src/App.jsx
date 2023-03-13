import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import CustOrderDetailsPage from './pages/CustomerOrderDetails/CustOrderDetailsPage';
import LoginPage from './pages/Login/LoginPage';
import ProductsPage from './pages/Products/ProductsPage';
import RegisterPage from './pages/Register/RegisterPage';
import CustomerOrdersPage from './pages/Orders/CustomerOrdersPage';
import AdminPage from './pages/Admin/AdminPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/customer/products" element={ <ProductsPage /> } />
        <Route path="/customer/checkout" element={ <CheckoutPage /> } />
        <Route path="/customer/orders/:id" element={ <CustOrderDetailsPage /> } />
        <Route path="/customer/orders" element={ <CustomerOrdersPage /> } />
        <Route path="/admin/manage" element={ <AdminPage /> } />
      </Routes>
    </div>
  );
}

export default App;
