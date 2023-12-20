import React, { Component } from "react";
import fantasy from "../data/books/fantasy.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const filteredBooks = fantasy.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="container text-center">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search books..."
          onChange={this.handleSearchChange}
          className="m-3 fs-4"
        />

        {/* Book Cards */}
        <div className="d-flex flex-wrap justify-content-center">
          {filteredBooks.map((elem) => (
            <Card
              id="carta"
              style={{ width: "12rem" }}
              className="m-2"
              key={elem.asin}
            >
              <Card.Img
                variant="top"
                className="h-100 object-fit-cover"
                src={elem.img}
              />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>{elem.category}</Card.Text>
                <Card.Text>{elem.price}€</Card.Text>
                <Button variant="outline-dark">Compra ora</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default AllTheBooks;
