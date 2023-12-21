import React, { Component } from "react";
import fantasy from "../data/books/fantasy.json";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      selectedBook: null,
      reviews: [],
    };
  }

  async componentDidMount() {
    // Carica le recensioni quando il componente viene montato
    await this.loadReviews();
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleCardClick = (book) => {
    this.setState({ selectedBook: book });
  };

  handleCommentsChange = (e) => {
    this.setState({
      selectedBook: {
        ...this.state.selectedBook,
        comments: e.target.value,
      },
    });
  };

  handleRatingChange = (e) => {
    this.setState({
      selectedBook: {
        ...this.state.selectedBook,
        rating: e.target.value,
      },
    });
  };

  handleReviewSubmit = async () => {
    const { selectedBook, reviews } = this.state;

    // Invia la recensione al backend
    await fetch("http://localhost:3001/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookId: selectedBook.asin,
        comments: selectedBook.comments,
        rating: selectedBook.rating,
      }),
    });

    // Ricarica le recensioni dopo l'invio
    await this.loadReviews();

    // Chiudi il modale e resetta lo stato
    this.setState({ selectedBook: null });
  };

  async loadReviews() {
    // Carica le recensioni dal backend
    const response = await fetch("http://localhost:3001/api/reviews");
    const reviews = await response.json();
    this.setState({ reviews });
  }

  render() {
    const { searchTerm, selectedBook, reviews } = this.state;
    const filteredBooks = fantasy.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="container text-center">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Cerca libri..."
          onChange={this.handleSearchChange}
          className="m-3 fs-4"
        />

        {/* Book Cards */}
        <div className="d-flex flex-wrap justify-content-center">
          {filteredBooks.map((elem) => (
            <Card
              id="carta"
              style={{
                width: "12rem",
                border: elem === selectedBook ? "3px solid red" : "none",
              }}
              className="m-2"
              key={elem.asin}
              onClick={() => this.handleCardClick(elem)}
            >
              <Card.Img variant="top" className="h-100 object-fit-cover" src={elem.img} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>{elem.category}</Card.Text>
                <Card.Text>{elem.price}€</Card.Text>
                <Button variant="outline-dark">Compra ora</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Review Modal */}
        <Modal show={selectedBook !== null} onHide={() => this.setState({ selectedBook: null })}>
          <Modal.Header closeButton>
            <Modal.Title>Recensione per {selectedBook && selectedBook.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex align-items-center">
            <label className="d-flex p-1">Commenti:</label>
            <textarea
              value={selectedBook ? selectedBook.comments : ""}
              onChange={this.handleCommentsChange}
            />

            <label className="d-flex ps-4 pe-1">Recensione:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={selectedBook ? selectedBook.rating : ""}
              onChange={this.handleRatingChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ selectedBook: null })}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={this.handleReviewSubmit}>
              Invia recensione
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Visualizza le recensioni */}
        <div className="mt-4">
          <h3>Recensioni:</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.bookId}</strong>: {review.comments} (Rating: {review.rating})
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllTheBooks;
