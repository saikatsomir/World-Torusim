import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Manage.css'

const Manage = () => {
    const {id} = useParams()
    const [deta , setDeta] = useState([])
    useEffect(()=>{
        fetch('https://bloodcurdling-caverns-81014.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data =>setDeta(data))
              
      },[id])
  
        const closebtns = document.getElementsByClassName("close");
        let i;
  
        for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
        });
        }
  
        const handleDlete = id => {
          const url = `https://bloodcurdling-caverns-81014.herokuapp.com/destinations/${id}`
          fetch(url, {
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data=>{
            
           if(data.deletedCount){
             alert('deleted')
             const remaining = deta.filter(det => det._id !== id)
             setDeta(remaining)
           }
  
         
          })
        }
    return (
        
           <div className="body">
               <h1 className="text-center mb-3">All Mangaement</h1>
        {
          deta.map(dt => <div key={dt._id}>
            
             <div className="body-handler text-center">
          <div className="div">
             <h1 className="text-cneter text-white h1 mb-3">Location</h1>
             <h6><span>Your Location: </span> {dt.from}</h6>
             <h6><span>Travle Location: </span> {dt.from}</h6>
          </div>
          <div className="div">
          <h1 className="text-cneter text-white h1 mb-3">Time Shedule</h1>
             <h6><span>How much time you want trip: </span> {dt.time} days</h6>
             <h6><span>Thank You</span></h6>
             
          </div>
          <div className="div">
          <h1 className="text-cneter text-white h1 mb-3">Location</h1>
             <h6><span>Minimum: </span> {dt.min} dollar</h6>
             <h6><span>Maximum: </span> {dt.max} dollar</h6> 
          </div>
       <Button onClick={()=> handleDlete(dt._id)} className="button text-dark bg-white border-0">Delete</Button>
       </div>
          </div>)
        }
      </div>
       
    );
};

export default Manage;