import {getAuth , signInWithPopup , GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import useForm from "./useForm";

initializeAuthentication();
const useFirebase = () =>{
    const [user , setUser] = useState({})
    const [isLoading , setIsLoadinng] = useState(true);
    const [ email ,
        password,
        emailChange,
        passChange,
        handleLoading] = useForm();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth , googleProvider)
        .then(result => {
            setUser(result.user);
        })
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
        .then(()=> {})
        .finally(()=> setIsLoadinng(true));
    }

    return {
        user,
        email ,
        password,
        emailChange,
        passChange,
        handleLoading,
        signInUsingGoogle,
        logOut, 
        isLoading
    }
}

export default useFirebase;