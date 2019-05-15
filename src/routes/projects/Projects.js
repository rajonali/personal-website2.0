import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (



<div class="card-group">
<div class="row">


<div class="col-sm-4">
<div id="project" class="card" style={{textAlign:'left', fontFamily:'monospace'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">PIRC Botnet</h5>
    <p class="card-text text-dark">An IRC C&C client and server communication script using raw TCP socket communication </p>
    <p class="card-text text-dark">Technologies: Python, MySQL</p>
      </div>
      <a href="#" style={{padding:'10px', borderRadius:'0px', backgroundColor:'#d9534f'}} class="btn btn-danger">Go to Github Repo</a>

</div>
</div>


<div class="col-sm-4">

<div id="project" class="card" style={{textAlign:'left', fontFamily:'monospace', borderRadius:'0px', borderWidth:'0px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">Supreme Cop Bot</h5>
    <p class="card-text text-dark">A checkout bot written in Python that takes keywords and your clothing sizes to ...</p>
    <p class="card-text text-dark">Technologies: Python, Flask, MySQL  </p>
      </div>
      <a href="#" style={{padding:'10px', borderRadius:'0px', backgroundColor:'#d9534f'}} class="btn btn-danger">Go to Github Repo</a>

</div>
</div>

<div class="col-sm-4">

<div id="project" class="card" style={{textAlign:'left', fontFamily:'monospace', borderRadius:'0px', borderWidth:'0px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">M.E.P.O.S</h5>
    <p class="card-text text-dark">A custom POS solution that shows live camera feed, transaction logs, and live...  </p>
    <p class="card-text text-dark">Technologies: Python, Flask, MySQL</p>
      </div>
      <a href="#" style={{padding:'10px', borderRadius:'0px', backgroundColor:'#d9534f'}} class="btn btn-danger">Go to Github Repo</a>

</div>
</div>


</div>
</div>

        );
    }
}

export default Projects;