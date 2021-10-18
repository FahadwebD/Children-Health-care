import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import './Register.css'
const Register = () => {
  const { email ,password,emailChange,passChange,handleRegistration , error} = useAuth()
  
    return (
        <div>
                 <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">
    


    <div className="fadeIn first">
      <img src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png" id="icon" alt="User Icon" />
    </div>

  
    <form onSubmit={handleRegistration}>
      <input onChange={emailChange} type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input onChange={passChange} type="password" id="login" className="fadeIn third" name="login" placeholder="password"/>
      <div><small className='text-danger'>{error}</small></div>
      <input  type="submit" className="fadeIn fourth" value="Register"/>
     
    </form>

   
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