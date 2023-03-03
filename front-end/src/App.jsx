import { Route, Routes } from 'react-router-dom';
import './App.css';
import RouteWithNav from './components/RouteWithNav';
import LoginPage from './pages/Login/LoginPage';
import ProductsPage from './pages/Products/ProductsPage';
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <RouteWithNav path="/customer/products" element={ <ProductsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
