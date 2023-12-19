import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`jumbotron jumbotron-fluid ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container">
        <h1 className="display-3 mb-3 text-danger fw-bold">LIBRERIA</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit sapiente laborum, perferendis cupiditate perspiciatis vero.
        </p>
      </div>
    </div>
  );
}
export default Welcome;
