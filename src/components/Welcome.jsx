import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  render() {
    const { isHovered } = this.state;

    return (
      <div
        className={`jumbotron jumbotron-fluid ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="container">
          <h1 className="display-3 mb-3 text-danger fw-bold">LIBRERIA</h1>
          <p className="lead fs-3">
            “Se ni’ mondo esistesse un po’ di bene
            e ognun si considerasse suo fratello
            ci sarebbe meno pensieri e meno pene
            e il mondo ne sarebbe assai più bello” -- <strong className='fs-5'>P.P.</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;

