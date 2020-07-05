import React, { Component } from 'react'
import FrontPage  from '../Assets/foreground.jpg'
import Typewriter from 'typewriter-effect';
import GooglePlayStoreBadge from '../Assets/google-playstore-badge.png'
import AppstoreBadge from '../Assets/app-store-badge.png'

export default class Landing extends Component {
    render() {
        return(
            <div> 
               <img src={FrontPage}  className="frontpage"/>    
               
  
                    <Typewriter 
                        options={{
                        strings: ['Find Balance with THESEL'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "type-text",
                        cursorClassName	: "Typewriter__cursor"
    
                    }}
                      
                    />
                    <div className="icons-wrapper">
                        <a href="#" >
                            <img src={GooglePlayStoreBadge} className="playstore" />
                        </a>
                        <a>
                        <img  src={AppstoreBadge} className="appstore"/>
                        </a>
                    </div>
                </div>
        );
    }
}