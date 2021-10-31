import React from "react";
import './MainFotter.css'

const MainFotter = () => {
    
    return (
        <div className="main_fotter mt-5 pt-5  gap-5 ">
           <div className="position-relative">
           <div>
                <img width="500px" className="rounded-3 img_db" src="https://i.ibb.co/xF0ZbQW/download-1.jpg" alt="" />
            </div>
            <div className="context ">
                <h4>Whenever you find yourself on the side of majority, it’s time to pause and reflect.</h4>
                <p>The more we worked, the more exhausted and disconnected we felt. When we introduced travel into our lives, we felt alive again.</p>
            </div>
           </div>
           <div className="position-relative">
           <div>
                <img width="500px" className=" rounded-3 img_db" src="https://i.ibb.co/k4gv7QB/download-3.jpg" alt="" />
            </div>
            <div className="context ">
                <h4>Whenever you find yourself on the side of majority, it’s time to pause and reflect.</h4>
                <p> When we are out with friends, we have so much to talk about. It’s way more meaningful to have a memory to share than to show off a “thing.”</p>
            </div>
           </div>
      </div>
    );
};

export default MainFotter;