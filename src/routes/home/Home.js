import React, {Component} from 'react';
import Projects from '../projects/Projects'
class Home extends Component {
    render() {
        return (

            <div
                style={{
                textAlign: "left",
            }}>
                <h3
                    style={{
                    textAlign: "left",
                    color:'#000'
                }}>
                    <strong>Hi! I’m Tasnim Ali. I'm a full stack web developer based in Baton Rouge, Louisiana. </strong>
                </h3>
                <br/>
                <p style={{ color:'#000', fontSize:'1.2rem' }} > 
 
Here is my blog where I write my solutions to overcoming coding errors I come across. Hopefully you can find something useful there: <a href="http://www.google.com">Tas Archives</a>  😉 <br /><br />

</p>
            


                <div>

                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat"
                        rel="stylesheet"/>

                    <h3
                        class="text-center"
                        style={{
                        color: 'black',
                        fontFamily: 'montserrat'
                    }}>🎯 My Skills</h3>

                    <br/>
                    <div
                        class="row"
                        style={{
                        color: 'black'
                    }}>
                        <div
                            class="card col"
                            style={{
                            padding: '0px',
                            marginRight: '10px'
                        }}>
                            <div
                                class="card-header text-center"
                                style={{
                                textAlign: 'center',
                                fontFamily: 'helvetica',
                                backgroundColor: '#d9534f',
                                color: 'white'
                            }}>
                                <strong>
                                     Languages<br />&nbsp;
                                </strong>
                            </div>
                            <ul
                                class="list-group text-center list-group-flush"
                                style={{
                                padding: "0px",
                                listStyleType: "none",
                                fontSize: '15px'
                            }}>
                                <li class="list-group-item">Python 2,3</li>
                                <li class="list-group-item">Javascript</li>
                                <li class="list-group-item">Java</li>
                                <li class="list-group-item">Ruby</li>
                                <li class="list-group-item">PHP</li>
                                <li class="list-group-item">HTML</li>
                            </ul>
                        </div>
                        <div
                            class="card col"
                            style={{
                            padding: '0px',
                            marginRight: '10px'
                        }}>
                            <div
                                class="card-header text-center"
                                style={{
                                textAlign: 'center',
                                fontFamily: 'helvetica',
                                backgroundColor: '#d9534f',
                                color: 'white'
                            }}>
                                <strong>
                                    Libraries and Frameworks
                                </strong>
                            </div>
                            <ul
                                class="list-group text-center list-group-flush"
                                style={{
                                padding: "0px",
                                listStyleType: "none",
                                fontSize: '15px'
                            }}>
                                <li class="list-group-item">Flask</li>
                                <li class="list-group-item">React</li>
                                <li class="list-group-item">React Native</li>
                                <li class="list-group-item">Android Development Framework</li>
                            </ul>
                        </div>
                        <div
                            class="card col"
                            style={{
                            padding: '0px',
                            marginRight: '10px'
                        }}>
                            <div
                                class="card-header text-center"
                                style={{
                                textAlign: 'center',
                                fontFamily: 'helvetica',
                                backgroundColor: '#d9534f',
                                color: 'white'
                            }}>
                                <strong>
                                    Methodologies<br />&nbsp;   
                                </strong>
                            </div>
                            <ul
                                class="list-group text-center list-group-flush"
                                style={{
                                padding: "0px",
                                listStyleType: "none",
                                fontSize: '15px'
                            }}>
                                <li class="list-group-item">REST API</li>
                                <li class="list-group-item">MVC</li>
                                <li class="list-group-item">WebHooks and APIs</li>
                            </ul>
                        </div>
                        <div
                            class="card col"
                            style={{
                            padding: '0px',
                            marginRight: '10px'
                        }}>
                            <div
                                class="card-header text-center"
                                style={{
                                textAlign: 'center',
                                fontFamily: 'helvetica',
                                backgroundColor: '#d9534f',
                                color: 'white'
                            }}>
                                <strong>
                                    Deployment & Databases
                                </strong>
                            </div>
                            <ul
                                class="list-group text-center list-group-flush"
                                style={{
                                padding: "0px",
                                listStyleType: "none",
                                fontSize: '15px'
                            }}>
                                <li class="list-group-item">SQL (postgresql, phpmyadmin, mysql)</li>
                                <li class="list-group-item">Heroku</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div>
                    <br/>
                    <br/>

                    <h3
                        class="text-center"
                        style={{
                        color: 'black',
                        fontFamily: 'montserrat'
                    }}>🌟 Latest Projects
                    </h3>
                    <br />
                    <Projects />
                    

                </div>
                <br /><br /><br />
                <h4
                    style={{
                    textAlign: "center",
                    fontFamily: 'monospace'
                }}

                    class="text-danger"><strong>Get in touch 👉  
                    <a class="text-primary" href="mailto:rajonali44492@icloud.com"> rajonali44492@icloud.com</a></strong>
                    <br /><br />


                    <div class="socials">
                    <a href="https://twitter.com/rajonali1" class="fa fa-twitter-square" style={{margin:'10px'}} />
                    <a href="https://github.com/rajonali?tab=repositories" class="fa fa-github" style={{margin:'10px'}} />
                    <a href="https://www.linkedin.com/in/rajonali1/" class="fa fa-linkedin-square" style={{margin:'10px'}} />
                    <a href="https://medium.com/@rajonali44492" class="fa fa-medium" style={{margin:'10px'}}></a>
                    </div>
                    
                    

                </h4>



            </div>
        );
    }
}

export default Home;