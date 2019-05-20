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
    <h5 class="card-title text-dark">CRUD Inventory Management App</h5>
    <p class="card-text text-dark">An app for a convenience store to organize their inventory and sales to create detailed reports with minimal UI experience and interaction.</p>
    <p class="card-text text-dark">Technologies: MongoDB, Express, React, and Node</p>
      </div>
      <a href="https://github.com/rajonali/CRUD-Inventory-Mgmt-Tool" style={{padding:'10px', borderRadius:'0px', backgroundColor:'#d9534f'}} class="btn btn-danger">Go to Github Repo</a>

</div>
</div>


<div class="col-sm-4">

<div id="project" class="card" style={{textAlign:'left', fontFamily:'monospace', borderRadius:'0px', borderWidth:'0px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">Apple Pay Finder</h5><br />
    <p class="card-text text-dark">A MERN app to find and curate a database of establishments that take Apple Pay and also allow users to submit locations for review.</p>
    <p class="card-text text-dark">Technologies: MongoDB, Express, React, and Node </p>
      </div>
      <a href="https://github.com/rajonali/applepayfinder" style={{padding:'10px', borderRadius:'0px', backgroundColor:'#d9534f'}} class="btn btn-danger">Go to Github Repo</a>

</div>
</div>

<div class="col-sm-4">

<div id="project" class="card" style={{textAlign:'left', fontFamily:'monospace', borderRadius:'0px', borderWidth:'0px'}}>
  <img class="card-img-top" src="./img/fuck.svg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title text-dark">PIRC C&C Framework </h5><br />
    <p class="card-text text-dark">An IRC relayed command and control server + client script written in Python to communicate with raw TCP sockets. </p>
    <p class="card-text text-dark">Technologies: Python, Flask, MySQL</p>
      </div>
      <a href="https://github.com/rajonali/PIRCBOTNET" style={{padding:'10px', borderRadius:'0px', backgroundColor:'#d9534f'}} class="btn btn-danger">Go to Github Repo</a>

</div>
</div>


</div>
</div>

        );
    }
}

export default Projects;