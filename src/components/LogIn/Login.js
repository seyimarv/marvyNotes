import React, {useState} from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
import { auth, signInWithGoogle } from '../../firebase/Firebase';


const Login = () => {
    const [user, setUser ] = useState({email: '', password:''})
    const { email, password } = user

    const handleSubmit = async event => {
        event.preventDefault();
    
       
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUser({ email: '', password: '' });
          } catch (error) {
            console.log(error);
            alert('login failed, check your login details')
          }
        
    }


    const handleChange = (event) => {
        const { value, name } = event.target;
    
        setUser({...user, [name]: value });   
        console.log(email)
      };
    

    return (
        <div className='login'>
         <div className='container'>
         <p className='title'>Hey, Welcome!</p>
          <div className='pt-2'>
          <button type="button" class="btn btn-primary btn-md btn-block" onClick={signInWithGoogle} >Log in with Google to Continue</button>
          </div>
          
         </div>
           
        </div>
    )
}





export default Login