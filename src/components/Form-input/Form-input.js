import React from 'react'
import './form-input.styles.scss'

export const Input = ({handleChange, ...otherProps }) => (
        <div class="form-group">
            <input type="text" class="input" id="exampleFormControlInput1" placeholder="Title" onChange={handleChange} {...otherProps}/>
         </div>
        // <div class="input-group input-group-sm mb-3">
        // <div class="input-group-prepend">
        // </div>
        // <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={handleChange} {...otherProps} />
        // </div>
  
)

export const Textarea = ({handleChange, ...otherProps}) => (

         <div class="form-group">
            <textarea  class='textarea' type='text' rows="3" onChange={handleChange} {...otherProps} />
        </div>
        
    
 )



