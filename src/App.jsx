import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Header from './components/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './App.css';
import About from './pages/about/About';

function App() {
  const [lang, setLang] = useState("en"); // Global til state

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
      <About />
    </div>
  );
}

export default App;
