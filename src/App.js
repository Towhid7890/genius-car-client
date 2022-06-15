import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/Notfound';
import Register from './Components/Register/Register';
import AuthRequire from './Components/AuthRequire/AuthRequire';
import AddService from './Components/AddService/AddService';
import ManageService from './Components/ManageService/ManageService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={
        <AuthRequire><ServiceDetails></ServiceDetails></AuthRequire>}>
        </Route>
        <Route path="/addservice" element={<AddService></AddService>}></Route>
        <Route path="/manage" element={<ManageService></ManageService>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
