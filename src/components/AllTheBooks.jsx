import React from "react";
import fantasy from "../data/books/fantasy.json"
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

function AllTheBooks() {
  return (
    <div className="container d-flex flex-wrap ">
      {fantasy.map((elem) => (
        <Card id="carta" style={{ width: "12rem" }} className="m-2" key={elem.asin}>
          <Card.Img variant="top" className=" h-100 object-fit-cover" src={elem.img} />
          <Card.Body>
            <Card.Title>{elem.title}</Card.Title>
            <Card.Text>{elem.category}</Card.Text>
            <Card.Text>{elem.price}€</Card.Text>
            <Button variant="outline-dark">Compra ora</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AllTheBooks;