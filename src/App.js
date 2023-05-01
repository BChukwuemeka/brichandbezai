import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './containers/header/Header'
import Brand from './components/brand/Brand';
import Features from './containers/features/Features'
import WhatBnB from './containers/whatBnB/WhatBnB'
import Possibility from './containers/possibility/Possibility'
import CTA from './components/cta/CTA'
import Blog from './containers/blog/Blog'
import Footer from './containers/footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatBnB />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
