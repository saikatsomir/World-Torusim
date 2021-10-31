import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Manage from '../SheduleTime/Manage';
import './DestinationCart.css'

const DestinationCart = () => {
    const {id} = useParams()
    const [carts, setCart] = useState([])

    useEffect(()=>{
            fetch('https://bloodcurdling-caverns-81014.herokuapp.com/destination')
            .then(res => res.json())
            .then(data => {
              const d = data.find(p=>p._id === id)
              setCart(d)
            })
          },[id])
          

      const closebtns = document.getElementsByClassName("close");
      let i;

      for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
      });
      }

     
    return (
   <div>
        <div className="curd">
          <li>  <div className="cards ">
           <div>
               <img className="" src={carts.detailImg1} alt="" />
           </div>
           <div className="ms-4">
               <div>
               <h1>Details</h1>
              
               </div>
              
               <h3>{carts.name}</h3>
               <h4>{carts.title}</h4>
              <h3>Review(7)</h3>
           </div>

       </div>
       <button className="close">X</button>
       </li> 
      </div>

      <div>
        <Manage></Manage>
      </div>
   </div>
    );
};

export default DestinationCart;