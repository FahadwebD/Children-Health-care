import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" id="icon" alt="User Icon" />
    </div>

  
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="password" id="login" className="fadeIn third" name="login" placeholder="password"/>
      <input type="button" className="fadeIn fourth" value="Log In"/>
    </form>

   
    <div id="formFooter">
      <Link className="underlineHover" to="/register">Don't Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
    );
};

export default Login;