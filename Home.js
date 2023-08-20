import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SCHEDULES from './schedule';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
  const initial = SCHEDULES.filter((Elem)=>{
    return Elem.category=='Cricket';
  }
  )
  const[items,setItems]=useState(initial)
  const filterItem=(categItem)=>{
    const updatedItems = SCHEDULES.filter((curElem)=>{
      return curElem.category==categItem;
    });
    setItems(updatedItems);
  }
    return (
<>

<div className="schedule-tab container row col-sm-12 col-md-6 col-lg-6 col-12 m-auto">
  <div className="schedule-tab justify-content-around ">
  <button className="btn btn-primary" onClick={()=>filterItem('Cricket')}>CRICKET</button>
  <button className="btn btn-success" onClick={()=>filterItem('Football')}>FOOTBALL</button>
  <button className="btn btn-dark" onClick={()=>filterItem('Badminton')}>BADMINTON</button>
  <button className="btn btn-warning" onClick={()=>filterItem('Basketball')}>BASKETBALL</button>
  {/* <button className="btn btn-info" onClick={()=>setItems(SCHEDULES)}>ALL</button> */}
  </div>
</div>
<div className="container-fluid my-5">

  
  

  <div className="d-flex justify-content-around "> 
  
  {
    items.map((elem)=>{
      const {id,image,teamA,teamB,venue,time,category}=elem;
      return(
        
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{category} Match</Card.Title>
        {/* <Card.Text>
          Wonderful match to be played under some wonderful atmosphere
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{teamA} V/S {teamB}</ListGroup.Item>
        <Card.Img variant="top" src={image}/>
        <ListGroup.Item>{venue}</ListGroup.Item>
        <ListGroup.Item>{time}</ListGroup.Item>
      </ListGroup>
      
    </Card>
      )
})
  }
  </div>
</div>


    
</>
  )
}
 export default Home