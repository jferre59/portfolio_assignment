//Jacob Ferreira - 301452914
//projects.jsx

import image1 from '../CalculatorApp.png';
import image2 from '../BrokerageWebpage.png';
import image3 from '../VOYAGEiQ.png';

const Projects = () => {
    return (
    <>
    <h3>Check out some select projects!</h3>
    <h4>Fractions Calculator - C#</h4>
    <p>Developed a fractions calculator app with an intuitive user interface.</p>
    <img src={image1} alt="Calculator App"></img>
    <h4>Real Estate Brokerage Website - HTML/CSS & JavaScript</h4>
    <p>Built a website for a fictional real estate brokerage consisting of 7 pages.</p>
    <img src={image2} alt="Brokerage Webpage"></img>
    <h4>VOYAGEiQ - SRS Documentation</h4>
    <p>Created a complete Software Requirements Specification document for an AI-powered travel tool.</p>
    <img src={image3} alt="VOYAGEiQ Presentation"></img>
    </>
    );
};

export default Projects;