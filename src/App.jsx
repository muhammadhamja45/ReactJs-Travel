import { Routes, Route } from 'react-router-dom'

import NavbarComponents from './Components/NavbarComponents';
import FooterComponents from './Components/FooterComponents';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CardPages from './pages/CardPages';
import GalleryPage from './pages/GalleryPage';
import WhyPage from './pages/WhyPage';
import ServicePage from './pages/ServicePage';

function App() {
  return <div>
    <NavbarComponents />
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/about' Component={AboutPage} />
      <Route path='/card' Component={CardPages} />
    </Routes>
    <CardPages />
    <WhyPage />
    <GalleryPage />
    <ServicePage />
    <FooterComponents />
  </div>;
}

export default App;
