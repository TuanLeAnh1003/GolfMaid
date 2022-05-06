import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import About from '../About';
import Account from '../Account';
import Contact from '../Contact';
import Home from '../Home';
import Policy from '../Policy';
import ProductDetail from '../ProductDetail';
import ResultSearchOrder from '../ResultSearchOrder';
import Sale from '../Sale';
import Search from '../Search';
import SearchOrder from '../SearchOrder';

function HomePage() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/product" element={<ProductDetail brand="Rolex" type="Rolex bạc"/>} />
      <Route path="/search-order" element={<SearchOrder />} />
      <Route path="/result-search-order" element={<ResultSearchOrder />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/account/:id" element={<Account />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default HomePage