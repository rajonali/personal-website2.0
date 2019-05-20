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

                   

                    <br/>
                    <h2>💼 Recent Experience:</h2>
                    <br />
                    <ul>
                        <li>
                        <h5>Full Stack developer intern at <a href="https://www.listedb.com/">ListedB</a> -- Worked with React+Redux, REST API, MongoDB and Netlify for deployment.</h5>
</li>                   </ul> 
                        
                        <br/>
                        <br/>

                    <h2>💻 Projects</h2>
                    <br />

                    <Projects />
                    <br />
                    <h2>📄 Resources</h2>
                    <a href="https://www.slideshare.net/slideshow/embed_code/key/tCSZUxAxOMQ75S">Personal CV</a>
                    <br />
                    
                </div>
                <br /><br />
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