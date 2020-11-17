import React from 'react'
import './loading.scss'


const Loading = () => {
    return (
        <div className='loading'>
           <div className='container text-center'>
            <div>
            <div class="spinner-border text-secondary " role="status">
              <span class="sr-only">Loading...</span>
            </div>
            </div>
            </div>
        </div>
    )
}


export default Loading;