import React from 'react';
import './About.css'

const About = () => {
    return (

        <div style={{marginTop:'100px'}}>
            <h1>About Us</h1>
        <div className="disp">
           

           <div class="card">
             <img height="200px" src="https://i.ibb.co/c60S8bW/pexels-photo-220453.jpg" alt="John"/>
             <h1>John Doe</h1>
             <p class="title">Founder, Example</p>
             <p>Harvard University</p>
             
           </div>
           
           <div class="card">
             <img height="200px" src="https://i.ibb.co/vYrPmWq/pexels-photo-220453.jpg" alt="John"/>
             <h1>Smith Due</h1>
             <p class="title">CEO & Founder, Example</p>
             <p>Harvard University</p>
            
           </div>
           
           <div class="card">
             <img height="170px" src="https://i.ibb.co/596QZY5/pexels-photo-220453-1.jpg" alt="John"/>
             <h1>John Doe</h1>
             <p class="title">CEO & Founder, Example</p>
             <p>Harvard University</p>
            
           </div>
                   </div>
        </div>
    );
};

export default About;