import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Shedule.css'


const Shedule = () => {

const [ deta, setDeta] = useState([])
useEffect(()=>{
    fetch('https://bloodcurdling-caverns-81014.herokuapp.com/destinations')
    .then(res=> res.json())
    .then(data => setDeta(data[0]))
},[])

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        axios.post('https://bloodcurdling-caverns-81014.herokuapp.com/destinations', data)
        .then(res =>{
          if(res.data.insertedId){
            alert('Are you really want to add this')
            reset()
          }
          alert(JSON.stringify(data));
        })
      };
    return (
        <div className="from">
          <h1 className="text-white">Give Us Your Time Shedule</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
          <label>Where you are from</label>

          <input
          {...register("from", {
          required: true,
          maxLength: 30,
          pattern: /^[A-Za-z]/i
          })}
          />
          {errors?.from?.type === "required" && <p>This field is required</p>}
          {errors?.from?.type === "maxLength" && (
          <p className="error">First name cannot exceed 20 characters</p>
          )}
          {errors?.from?.type === "pattern" && (
          <p className="error">Alphabetical characters only</p>
          )}
          <label>Hwere you want ot visit</label>
          <input {...register("to", { pattern: /^[A-Za-z]/i })} />
          {errors?.to?.type === "pattern" && (
          <p className="error">Alphabetical characters only</p>
          )}
          <label>How much time you want to travle</label>
          <input {...register("time", { min: 2, max: 10 })} />
          {errors.time && (
          <p className="error">You Must stay 2 day and not more than  10 day</p>
          )}
          <label>Minimum Pirce</label>
          <input {...register("min", { min: 2 })} />
          {errors.time && (
          <p className="error">You Must stay about 20000 price </p>
          )}
          <label>Maximum Price</label>
          <input {...register("max", { max: 10000 })} />
          {errors.time && (
          <p className="error">Our Maximum fee about 100000</p>
          )}
          <div className="d-flex gap-3">
          <input id="button" type="submit" name="button" value="Submit"/>

          </div>


          </form>
        </div>
    );
};

export default Shedule;