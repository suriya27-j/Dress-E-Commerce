
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/asserts/banner_mens.png'
import women_banner from './components/asserts/banner_women.png'
import kid_banner from './components/asserts/banner_kids.png'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />}/>
        <Route path='/Womens' element={<ShopCategory  banner={women_banner}category='women' />}/>
        <Route path='/Kids' element={<ShopCategory  banner={kid_banner} category='kid' />}/>
        <Route path='/Product' element={< Product/>}>
            <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Login' element={<LoginSignup />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
