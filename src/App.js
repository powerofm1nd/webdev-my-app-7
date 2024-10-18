import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import MyFooter from './components/MyFooter';
import MyProducts from './components/MyProducts';
import { Container } from 'react-bootstrap';
import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let products = [
  {
    id: 1,
    name: 'Sunny Blooms',
    description: "Grow vibrant sunflowers in your garden! Easy-to-plant seeds for bright, tall flowers.",
    src: '/images/goods/1.jpg',
    fullDescription: "Sunny Blooms - Transform your garden into a field of golden sunshine with 'Sunny Blooms'. These easy-to-plant sunflower seeds are perfect for beginner gardeners and seasoned pros alike. With minimal effort, you'll grow vibrant, tall sunflowers that brighten up any outdoor space. Whether you’re looking to attract bees and butterflies or simply add a pop of color, 'Sunny Blooms' is your ideal choice."
  },
  {
    id: 2,
    name: 'Radiant Sunflowers',
    description: "Start your sunflower journey with these quality seeds. Perfect for any garden space!",
    src: '/images/goods/2.jpg',
    fullDescription: "Radiant Sunflowers - Begin your sunflower-growing journey with 'Radiant Sunflowers'. These high-quality seeds are specifically selected for their ease of planting and impressive bloom results. Suitable for any garden size, these sunflowers will create a stunning focal point in your outdoor space. Watch them grow tall and proud, providing a natural habitat for birds and pollinators. Ideal for gardeners of all experience levels."
  },
  {
    id: 3,
    name: 'Brighten Your Garden',
    description: "High-quality sunflower seeds for bold, golden blooms. Ideal for sunny spots!",
    src: '/images/goods/3.jpg',
    fullDescription: "Brighten Your Garden - Add a burst of sunshine to your garden with 'Brighten Your Garden' sunflower seeds. Known for producing bold, golden blooms, these seeds thrive in sunny spots and bring life to any landscape. Not only are they beautiful to look at, but they also serve as a natural draw for bees and butterflies, making your garden a haven for pollinators. These seeds are perfect for anyone looking to elevate their gardening game with minimal effort."
  },
];

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const Login = useCallback(() => {
    setAuth(true);
  }, []);

  const Logout = useCallback(() => {
    setAuth(false);
  }, []);

  const ShowAuthModalForm = useCallback(() => {
    setModalShow(true);
  }, []);

  const HideAuthModalForm = useCallback(() => {
    setModalShow(false);
  }, []);

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (

    <Container>
      <MyNavbar 
        ShowAuthModalForm={ShowAuthModalForm} 
        onLogin={Login} 
        onLogout={Logout} 
        isAuth={isAuth} 
        onChangeTheme={setTheme} 
      />
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <MyCarousel />
              <br />
              <MyProducts products={products} />
              <MyFooter />
            </>
          } />
          <Route path="/features" element={
            <Features/>
          } />

        <Route path="/pricing" element={
            <>
              <Pricing/>
            </>
          } />

        <Route path="/profile" element={
            <>
              <Profile/>
            </>
          } />


        <Route path="/product/:id" element={
            <>
              <Product products={products}/>
            </>
          } />

        </Routes>
      </Router>
    </Container>
  );
}

export default App;