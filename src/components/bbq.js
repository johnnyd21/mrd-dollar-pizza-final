import React, { Component } from 'react';
import bbq from './images/bbq.jpg';

function Bbq() {
  return(
    <div className="bbq col-4">
      <div className="card">
        <img src={ bbq } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">BBQ Slice</h5>
          <p className="card-text">Enjoy this BBQ Chicken slice with all the fixins!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  )
}

export default Bbq;
