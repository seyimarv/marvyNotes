import React from 'react'
import './Homepage.styles.scss'
import {Link} from 'react-router-dom'



const HomePage = () => (
    <div className='homepage'>
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                    <h1 class="display-4">welcome!</h1>
                      <p class="lead">This is a simple website that allows you to write short notes that you can edit and also delete</p> 
                        <Link to='/Notepage'><button type="button" class="btn btn-primary">write a note</button></Link> 
                    </div>
                </div>
            </div>
        </div>

    </div>

)

export default HomePage;
