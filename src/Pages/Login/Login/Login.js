import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useForm from '../../../hooks/useForm';
import './Login.css'

const Login = () => {
 
    
    const { email ,password,emailChange,passChange,handleLogin,signInUsingGoogle} = useAuth()
    console.log(email , password)
    return (
        <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" id="icon" alt="User Icon" />
    </div>

  
    <form  onSubmit={handleLogin}>
      <input onChange={emailChange} type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input onChange={passChange} type="password" id="login" className="fadeIn third" name="login" placeholder="password"/>
      <input  type="submit" className="fadeIn fourth" value="Log In"/>
     
    </form>

    <div className='mb-2'>
      <Button onClick={signInUsingGoogle} className='px-5 fadeIn fourth' style={{backgroundColor:'#58baed' , border:"none"}}>Google</Button>
      </div>
    <div id="formFooter">
      <Link className="underlineHover" to="/register">Don't Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
    );
};

export default Login;