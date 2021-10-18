import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Appointed from './Pages/Appointed/Appointed/Appointed';
import Donate from './Pages/Donate/Donate';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Researches from './Pages/Researches/Researches';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
   <Header/>
   <Switch>
     <Route exact path='/'>

       <Home></Home>

     </Route>
     <Route exact path='/home'>

       <Home></Home>

     </Route>
     <PrivateRoute exact path='/appointed/:serviceId'>
      <Appointed></Appointed>
      </PrivateRoute>
      <PrivateRoute exact path='/research'>
      <Researches></Researches>
      </PrivateRoute>
      <PrivateRoute exact path='/donates'>
     <Donate></Donate>
      </PrivateRoute>
      <Route exact path ='/login'>
        <Login></Login>
      </Route>
      <Route exact path ='/register'>
       <Register></Register>
      </Route>
     <Route exact path='*'>

      <NotFound></NotFound>

    </Route>
   </Switch>
   <Footer></Footer>
   </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
