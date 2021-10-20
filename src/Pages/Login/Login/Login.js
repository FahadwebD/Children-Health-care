import React from 'react';
import { Button } from 'react-bootstrap';
import { Link , useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useForm from '../../../hooks/useForm';
import './Login.css'

const Login = () => {
 
    
    const { email ,password,emailChange,passChange,handleLogin, signInUsingGoogle ,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log(error)
    const errorDetect =(error == 'Firebase: Error (auth/invalid-email).')?'invalid Email':(error == 'Firebase: Error (auth/wrong-password).')?'password wrong':(error == 'Firebase: Error (auth/user-not-found).')?'user not found':(error == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).')?'account temporary disable due to many request':''

    const handleGoogleSignin = () => {


      signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
    }
    
    
    return (
        <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" id="icon" alt="User Icon" />
    </div>

  
    <form  onSubmit={handleLogin}>
      <input onChange={emailChange} type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
      <input onChange={passChange} type="password" id="login" className="fadeIn third" name="login" placeholder="password"/>
      <input  type="submit" className="fadeIn fourth" value="Log In"/>
     
    </form>
    
    <p style={{color:'red'}}>{errorDetect}</p>

    <div className='mb-2'>
      <Button onClick={handleGoogleSignin} className='px-5 fadeIn fourth' style={{backgroundColor:'#58baed' , border:"none"}}>Google</Button>
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