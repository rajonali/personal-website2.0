import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (

<div class="container">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <div class="row justify-content-center align-items-center" style={{ height:'100px' }}>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <form action="" autocomplete="off">
                            <div class="form-group">
                            Username:
                                <input type="text" class="form-control" name="username" />
                            </div>
                            <br />
                            <div class="form-group">
                            Password: 

                                <input type="password" class="form-control" name="password" />
                            </div>
                            <br />
                            <button type="button" id="sendlogin" class="btn btn-primary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>        );
    }
}

export default Admin;