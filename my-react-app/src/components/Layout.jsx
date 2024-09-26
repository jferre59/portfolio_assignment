//Jacob Ferreira - 301452914
//Date: 2024-09-16
//layout.jsx

import { Link } from 'react-router-dom';
import image from '../logo.png';

//Function returning the layout of the header & nav bar
export default function Layout() {
 return (
 <>
 <img src={image} alt="JF Logo"></img>
 <h1>Jake's Portfolio</h1>
 <nav>
 <Link to="/">Home</Link> | 
 <Link to="/about"> About Me</Link>  | 
 <Link to="/services"> Services</Link> | 
 <Link to="/projects"> Projects</Link> | 
 <Link to="/contact"> Contact</Link>
 </nav>
<br/>
 <hr />
 
</>
 
 );
}