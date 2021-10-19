import React from 'react';
import { Button } from 'react-bootstrap';
import { Link , useHistory  , useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Register.css'
const Register = () => {
  const { email ,password, profileName , nameChange ,emailChange,passChange,handleRegistration , signInUsingGoogle ,  error} = useAuth()
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
    
  const handleGoogleSignin = () => {


    signInUsingGoogle()
    .then(result => {
      history.push(redirect_uri);
    })
  }
  console.log(email , password , profileName )
    return (
        <div>
                 <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" id="icon" alt="User Icon" />
    </div>

  
    <form onSubmit={handleRegistration}>
      <input onChange={nameChange} type="text" placeholder='name' />
      <input onChange={emailChange} type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
      <input onChange={passChange} type="password" id="login" className="fadeIn third" name="login" placeholder="password"/>
      <div><small className='text-danger'>{error}</small></div>
      <input  type="submit" className="fadeIn fourth" value="Register"/>
     
    </form>

    <div className='mb-2'>
      <Button onClick={handleGoogleSignin} className='px-5 fadeIn fourth' style={{backgroundColor:'#58baed' , border:"none"}}>Google</Button>
      </div>
   
    <div id="formFooter">
      <Link className="underlineHover" to="/login">Already Have An Account?</Link>
    </div>

  </div>
</div>
        </div>
        </div>
    );
};

export default Register;