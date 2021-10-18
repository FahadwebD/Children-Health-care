import { useState } from "react"

const useForm =()=>{

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
  

    const handleLoading = e =>{
   
        console.log(email , password)
        // createUserWithEmailAndPassword(auth, email, password)
        // .then (result =>{
        //   const user= result.user
        //   console.log(user)
        // })
        e.preventDefault()
      }
      const emailChange = e =>{
    
        setEmail(e.target.value)
    
      }
      const passChange = e =>{
        setPassword(e.target.value)
      }


      return [
          email ,
          password,
          emailChange,
          passChange,
          handleLoading
      ]

}
export default useForm;