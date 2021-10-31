import React, { useEffect, useState } from 'react';
import Destination from './Destination';
import MainFotter from './MainFotter';
import './Mani.css'

const Main = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(()=>{
        fetch('https://bloodcurdling-caverns-81014.herokuapp.com/destination')
        .then(res => res.json())
        .then(data => setDestinations(data))
    })
    return (
        <>
        <div className="easy_life ">
            <div>
                <img className="easy_life_img" src="https://static.toiimg.com/photo/47457021.cms" alt="" srcset="" />
            </div>
            <div className="easy_life_intro">
                <h1>A Simply Perfect Place To Get Lost</h1>
                <h5>A Simply Perfect Place To Get Lost
                Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</h5>
            </div>
        </div>

        <div id="services" className="row row-cols-1 row-cols-md-3  mt-5 ">
            {
                destinations.map(destination => <Destination
                destination={destination}
                ></Destination>)
            }
        </div>
<MainFotter></MainFotter>
        </>
    );
};

export default Main;