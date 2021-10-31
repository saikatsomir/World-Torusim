import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = ({destination}) => {
  const {_id, name,time, title, price,titleImg} = destination
    return (
        <div className="">
            <div className="d-flex justify-content-around">
  <Card className="conten" style={{ width: '18rem' }}>
    <Card.Img className="img" variant="top" src={titleImg} />
    <Card.Body>
      <Card.Title  className="content">{time} Days || ${price}</Card.Title>
      <Card.Title>{name}</Card.Title>
      <Card.Text> {title} </Card.Text>
      <Link to={`/detail/${_id}`}>  <button variant="primary">Booking Now</button></Link>
     
    </Card.Body>
  </Card>
  </div>

  {/* <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card> */}

            
        </div>
    );
};

export default Destination;