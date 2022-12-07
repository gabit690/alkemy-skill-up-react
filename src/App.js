import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import NotFound from "./pages/NotFound";
import UserRoutes from "./routes/UserRoutes";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {

  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="users/*" element={<UserRoutes />} />
      
      <Route path="list" element={<List />} />

      
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>;
}

export default App;
