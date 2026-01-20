import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Header from './components/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import './App.css';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Services from './pages/service/Services';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [lang, setLang] = useState("en"); // Global til state

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      {/* Header tilni va setLang funksiyasini oladi */}
      <Header lang={lang} setLang={setLang} />

      {/* Router */}
      {/* <Routes>
        <Route path='/' element={<Home lang={lang} />} />
      </Routes> */}
      <Home lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Services lang={lang} />

    </div>
  );
}

export default App;
