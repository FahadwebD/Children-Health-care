import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Switch>
     <Route exact path='/'>

       <Home></Home>

     </Route>
     <Route exact path='/home'>

       <Home></Home>

     </Route>
     <Route exact path='*'>

      <NotFound></NotFound>

    </Route>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
