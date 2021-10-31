import React from 'react';
import './Fotter.css'

const Fotter = () => {
    return (
        <>
            <div className="fotter pt-5 mt-5">
                <div className=" ">
                    <h2 className="text-white">About Us</h2>
                    <h5 className="">If you are a good.You obviously want tour with us. So let's see you in our cam.</h5>
                    <br />
                    <h4 className=""><i className="fas fa-phone-volume text-warning "> </i> 1-677-124-44227</h4>
                    <h4><i className="fas fa-map-marker-alt text-warning"></i> Nithpur, Porhsa, Naogaon</h4>
                    <h4><i class="fas fa-envelope text-warning"></i> SaikatSomir@gmail.com</h4>
                </div>
                <div className="">
                    <h2 className="text-white">Latest Posts</h2>
                    <br />
                    <h6 className="text-warning">21,Jan,2021</h6>
                    <h4>How to take Better Photos</h4>
                    <br />
                    <h6 className="text-warning">16,Nov,2021</h6>
                    <h4>14 Things To See And Do When Visiting Kyoto</h4>
                    <br />
                    <h6 className="text-warning">18,Aug,2021</h6>
                    <h4>Backpacking Laos: A Full Travel Guide for You</h4>
                </div>
                <div className="">
                    <h2 className="text-white">Latest Tweets</h2>
                    <br />
                    <h4><i className="fab fa-linkedin text-warning"></i> https://www.linkedin.com/ <small>can’t recommend anyone specific, but you can find a list of freelenacers working wit…</small></h4>
                    <br />
                    <h4><i className="fab fa-twitter text-warning"></i> https://twitter.com/?lang=en <small>article to get you started with using our support platform: https://t.co/eiUoQNlHUh Let…</small></h4>
                </div>
                <div className="">
                    <img className="fotter-igm" src="https://i.ibb.co/9wTNhSY/Capture-removebg-preview-1.png" alt="" />
                    <h2>This Travel Agencey Just For Them.. <br /> <br/> Who want to make TRIP ()</h2>
                </div>  
            </div>  
        </>
    );
};

export default Fotter;