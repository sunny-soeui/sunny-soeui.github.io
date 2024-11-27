import React from 'react'
import '../Styles/Popup.css'
import { useState } from 'react';

function AboutMePopUp(props) {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default AboutMePopUp