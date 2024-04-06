import Nav from './Components/navbar/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import Shopcat from "./pages/Shopcat";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Nav />  

      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path ="/womens" element={<Shopcat catgeory="women"/>}/>
        <Route path='/mens' element={<Shopcat  catgeory="men"/>}/>
        <Route path='/kids' element={<Shopcat catgeory="kid"/>}/>
        <Route path='/Product'element={<Product />}/>
        <Route path=":Productid" element={<Product/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
