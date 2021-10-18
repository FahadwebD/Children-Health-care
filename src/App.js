import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Appointed from './Pages/Appointed/Appointed/Appointed';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header/>
   <Switch>
     <Route exact path='/'>

       <Home></Home>

     </Route>
     <Route exact path='/home'>

       <Home></Home>

     </Route>
     <Route exact path='/appointed/:serviceId'>
      <Appointed></Appointed>
      </Route>
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
    </div>
  );
}

export default App;
