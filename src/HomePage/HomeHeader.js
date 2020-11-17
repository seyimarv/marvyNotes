import React from 'react'
import {ReactComponent as Logo} from '../assests/logo.svg'
import {Link} from 'react-router-dom'
import './homeHeader.scss'
import { auth } from '../firebase/Firebase'


const HomeHeader = ({user}) => {
 console.log(user)
 const onLogout = () => {
    auth.signOut()
  }
return (
    <div className='header'>
        <nav class="navi fixed navbar navbar-light bg-light">
        <Link to='/'><Logo className='logo' /></Link>
        <form class="form-inline">
  { user ?
     <Link to='/Notepage' >
        <button type="button" class="btn btn-primary" >write</button></Link> : null
        }
        </form>
        </nav>
    </div>

  
)
}

export default HomeHeader