import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import banner from './banner.jpg';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Catalog from './components/Main/Catalog/Catalog';
import Product from './components/Product/Product';
import About from './components/About/About';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className={styles.wrapper}>
      <header>
        <Header />
      </header>
      <main>
        <div className={styles.banner}>
          <img width="100%" height="330px" src={banner} alt="banner" />
          <h2>К весне готовы</h2>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cartproduct/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
