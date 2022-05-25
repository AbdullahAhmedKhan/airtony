import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Review from './Pages/Review/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
        <Route path='/part/:productId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
