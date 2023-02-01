import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from './components/Footer';
import Detail from "./pages/Detail";
import Menu from "./components/Menu";
import Results from "./pages/Results";

import { createContext, useState } from "react";

export const TokenContext = createContext();

function App() {

  const [token, setToken] = useState(sessionStorage.getItem('token'));

  return <TokenContext.Provider value={setToken}>
    <Header />
    {sessionStorage.getItem('token') && <Menu />}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="discover" element={<Discover />} />
      <Route path="detail" element={<Detail />} />
      <Route path="results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </TokenContext.Provider>;
}

export default App;
