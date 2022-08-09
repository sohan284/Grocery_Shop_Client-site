import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/Login/RequirAuth/RequireAuth';
import Manage from './Pages/Inventory/Manage/Manage';
import AddProduct from './Pages/AddProduct/AddProduct';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/home' element={<Home></Home>}>
        </Route>
  
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <Manage></Manage>
        }>
        </Route>
        <Route path='/login' element={<Login></Login>}>
        </Route>
        <Route path='/register' element={<Register></Register>}>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}>
        </Route>
       

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
