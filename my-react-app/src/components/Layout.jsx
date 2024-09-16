//Jacob Ferreira - 301452914
//layout.jsx

import { Link } from 'react-router-dom';
export default function Layout() {
 return (
 <>
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