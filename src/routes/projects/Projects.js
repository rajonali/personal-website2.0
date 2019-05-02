import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (

<div class="card-group">

<div class="card" style={{width: "18rem", textAlign:'left', fontFamily:'monospace', marginRight:'10px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">PIRC Botnet</h5>
    <p class="card-text text-dark">An IRC C&C client and server communication script using raw TCP socket communication. </p>
    <p class="card-text text-dark">Technologies: Python, MySQL</p>
      </div>
      <a href="#" style={{padding:'10px', borderRadius:'0px'}} class="btn btn-danger">Go to Github Repo</a>

</div>


<div class="card" style={{width: "18rem", textAlign:'left', fontFamily:'monospace', marginRight:'10px', borderRadius:'0px', borderWidth:'0px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">Supreme Cop Bot</h5>
    <p class="card-text text-dark">A checkout bot written in Python that takes keywords and your clothing sizes to automatically buy limited edition drops on supremenewyork.com website.  </p>
    <p class="card-text text-dark">Technologies: Python, Flask, MySQL  </p>
      </div>
      <a href="#" style={{padding:'10px', borderRadius:'0px'}} class="btn btn-danger">Go to Github Repo</a>

</div>


<div class="card" style={{width: "18rem", textAlign:'left', fontFamily:'monospace', marginRight:'10px', borderRadius:'0px', borderWidth:'0px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">M.E.P.O.S</h5>
    <p class="card-text text-dark">A custom POS solution that shows live camera feed, transaction logs, and live inventory count and alerts.  </p>
    <p class="card-text text-dark">Technologies: Python, Flask, MySQL</p>
      </div>
      <a href="#" style={{padding:'10px', borderRadius:'0px'}} class="btn btn-danger">Go to Github Repo</a>

</div>



</div>

        );
    }
}

export default Projects;