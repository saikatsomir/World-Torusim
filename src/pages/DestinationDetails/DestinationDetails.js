import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import './DestinationDetail.css'

const DestinationDetails = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([])
    
    useEffect(()=>{
        fetch('https://bloodcurdling-caverns-81014.herokuapp.com/destination')
        .then(res => res.json())
        .then(data=>{
            const d = data.find(p => p._id === id)
            setDetails(d)
        })
        
    },[id])
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
      axios.post('https://bloodcurdling-caverns-81014.herokuapp.com/destinations', data)
      .then(res =>{
        if(res.data.insertedId){
          alert('Are you really want to add this')
        }
        alert(JSON.stringify(data));
      })
      console.log(data);
    };
    return (
          <div>
          <div className="details">
            <div className="detail">
            <Carousel style={{width:'350px'}}>
          <Carousel.Item>
          <img
          className="d-block w-100 imge"
          src={details?.detailImg1}
          alt="First slide"
          />
          <Carousel.Caption>
          <h3 className="text-white  pb-2">Founding Place</h3>
          <h5 className="text-white mb-5 pb-2 ">That's the place. We will be visit</h5>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="d-block rounded w-100 imge"
          src={details?.detailImg2}
          alt="Second slide"
          />
          <Carousel.Caption>
          <h3 className="text-white  pb-2">Founding Place</h3>
          <h5 className="text-white mb-5 pb-2 ">That's the place. We will be visit</h5>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="d-block w-100 imge"
          src={details?.detailImg3}
          alt="Third slide"
          />
          <Carousel.Caption>
          <h3 className="text-white  pb-2">Founding Place</h3>
          <h5 className="text-white mb-5 pb-2 ">That's the place. We will be visit</h5>
          </Carousel.Caption>
          </Carousel.Item>
          </Carousel>

          <div className="detail-content">
          <h3>Intro</h3>
          <h3>{details?.name}</h3>
          <h6>{details?.title}</h6>
          <Rating
          initialRating={details?.rating}
          readonly
          emptySymbol="far fa-star fa-1x text-danger"
          fullSymbol="fas fa-star fa-1x text-danger"
          /> 
          <br />
          </div>
          </div>
          <div className="revie">
          <h1 className="text-black">Details</h1>
          <p>{details?.detail}</p>
          </div>         
          </div>


          <div className="from">
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
          <div className="submit gap-3">
          <input id="button" type="submit" name="button" value="Submit"/>
          <Link to={`/details/${details?._id}`}className="rounded text-dark   border-0"> <input type="submit" value="Go to Booklist" /> </Link> 
          </div>


          </form>


          </div>
          </div>


    );
};

export default DestinationDetails;