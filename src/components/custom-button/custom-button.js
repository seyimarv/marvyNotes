import React from 'react'
import './custom-button.scss'

const CustomButton = ({children}) => (
    <button className='custom-button'>
    {children}

    </button>
);

export default CustomButton;