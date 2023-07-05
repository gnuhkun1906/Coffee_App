
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/page/Home';
import About from './components/page/About';
import Menu from './components/page/Menu';
import Review from './components/page/Review';

import { Route, Routes } from 'react-router-dom';
import Login from './components/page/Login';
import Register from './components/page/Register';
import Cart from './components/page/Cart';
import HomeContent from './components/page/HomeContent';
import Admin from './components/admin/Admin';
import Products from './components/admin/Products';
import ManagerUsers from './components/admin/ManagerUsers';
import Orders from './components/admin/Orders';
import AddProduct from './components/admin/AddProduct';
import EditProduct from './components/admin/EditProduct';
import OrderUser from './components/page/OrderUser';


function App() {
  return (

    <div className="App">
      <>
        {/* HEADER */}


        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<HomeContent />} />
            <Route path='about' element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="review" element={<Review />} />
            <Route path="orderUser" element={<OrderUser />} />
            
            <Route path="cart" element={<Cart />} />
            
          </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          <Route path='/admin' element={<Admin />}>
            <Route index />
            <Route path='products' element={<Products />} />
            <Route path='manager' element={<ManagerUsers />} />
            <Route path='order' element={<Orders />} />
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='editproduct' element={<EditProduct />} />
          </Route>

        </Routes>

      </>

    </div>
  );
}

export default App;
