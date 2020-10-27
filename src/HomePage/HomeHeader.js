import React from 'react'
import {ReactComponent as Logo} from '../assests/logo.svg'
import {Link} from 'react-router-dom'
import './homeHeader.scss'


const HomeHeader = () => (
    <div className='header'>
        <nav class="navi fixed navbar navbar-light bg-light">
        <Link to='/'><Logo className='logo' /></Link>
        <form class="form-inline">

        <Link to='/Notepage'><button type="button" class="btn btn-primary">write</button></Link>
        </form>
        </nav>
    </div>
 
  
)

export default HomeHeader