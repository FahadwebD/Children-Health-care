import {getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword ,signInWithPopup , GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import useForm from "./useForm";

initializeAuthentication();
const useFirebase = () =>{
    const [user , setUser] = useState({})
    const [isLoading , setIsLoadinng] = useState(true);
    const [ email ,password,emailChange,passChange] = useForm();
    const [error , setError] = useState('')
    const auth = getAuth();

    const handleRegistration = e =>{
         e.preventDefault();
            if(password.length<6){
                setError('password must ve atleast 6 charecter long')
                return;
            }
            if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
                setError('Atleast Use Two Upper Case')
                return;
            }
            if(!/(?=.*[0-9].*[0-9])/.test(password)){
                setError('Atleast Use Two Digit')
                return;
            }
            createUserWithEmailAndPassword(auth, email, password)
            .then (result =>{
              const user= result.user
              console.log(user);
              setError('')
            })
            .catch(error => {
                setError(error.message);
            })
           
          } 

    
 const handleLogin= e =>{
        e.preventDefault();
            signInWithEmailAndPassword(auth , email, password)
            .then (result =>{
              const user= result.user
              setUser(user);
              setError('')
            })
            .catch(error => {
                setError(error.message);
            })

        }



const signInUsingGoogle = () =>{
        setIsLoadinng(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth , googleProvider)
        
        .finally(()=> setIsLoadinng(false));
    }



useEffect(()=>{
     const unsubscribed = onAuthStateChanged(auth , user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoadinng(false)
        });
        return () => unsubscribed;

    }, [])


    const logOut = () =>{
        setIsLoadinng(true);
        signOut(auth)
        .then(()=> {
            setUser({})
        })
        .finally(()=> setIsLoadinng(false));
    }



    return {
        user,
        email ,
        password,
        emailChange,
        passChange,
        error,
        handleRegistration,
        handleLogin,
        signInUsingGoogle,
        logOut, 
        isLoading
    }
}

export default useFirebase;