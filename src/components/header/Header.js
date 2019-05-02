import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                
            <header>
<div style={{color:'#d9534f', fontFamily: 'Helvetica Neue', fontSize:'20px', backgroundColor: 'transparent', whiteSpace: 'pre-wrap'}}>
<pre style={{color:'#d9534f', fontSize:'20px', border: '0px', }}>`
{`
████████╗ █████╗ ███████╗    █████╗ ██╗     ██╗
╚══██╔══╝██╔══██╗██╔════╝   ██╔══██╗██║     ██║
   ██║   ███████║███████╗   ███████║██║     ██║
   ██║   ██╔══██║╚════██║   ██╔══██║██║     ██║
   ██║   ██║  ██║███████║   ██║  ██║███████╗██║
   ╚═╝   ╚═╝  ╚═╝╚══════╝   ╚═╝  ╚═╝╚══════╝╚═╝
   `}
   </pre>
</div>

    
<div class="menu" style={{ fontSize:'20px' }}>

    <ul> 
        <li style={{   display: 'inline', margin: '5px' }}><a href='/' style={{color:'#d9534f', fontFamily: 'Monospace', textDecoration: 'none'}}> <strong>About</strong> </a></li>
        <li style={{   display: 'inline', margin: '5px' }}><a href='/blog' style={{color:'#d9534f', fontFamily: 'Monospace', textDecoration: 'none'}}> <strong>Blog</strong> </a></li>
        <li style={{   display: 'inline', margin: '5px' }}><a href='/projects' style={{color:'#d9534f', fontFamily: 'Monospace', textDecoration: 'none'}}> <strong>Projects</strong></a></li>


    </ul>
</div>
<br />
<br />

</header>

        );
    }
}






  

export default Header;