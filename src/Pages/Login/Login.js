import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div class="wrapper fadeInDown">
  <div id="formContent">
    


    <div class="fadeIn first">
      <img src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" id="icon" alt="User Icon" />
    </div>

  
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>

   
    <div id="formFooter">
      <Link class="underlineHover" to="/register">Don't Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
    );
};

export default Login;