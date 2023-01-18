import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from './components/Footer';
import Detail from "./pages/Detail";
import Menu from "./components/Menu";

function App() {

  return <>
    <Header />
    <Menu />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="discover" element={<Discover />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>;
}

export default App;
