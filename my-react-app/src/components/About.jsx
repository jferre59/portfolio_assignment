//Jacob Ferreira - 301452914
//Date: 2024-09-16
//about.jsx
import image from '../linkedin_pic.jpg';
import resume from '../Resume.pdf';

//Function returning the content of the About Me page
const About = () => {
    return (
        <>
        <img src={image} alt="LinkedIn Image"></img>
        <h3>Jacob Ferreira</h3>
        <h5>Software Engineering & AI Co-op Student</h5>
        <p>Driven & adaptable student of Software Engineering, with a specialization
            in Artificial Intelligence. Strengths include project management, problem-solving,
            research & analysis.
        </p>
        <h3>Check out Jake's full resume below:</h3>
        <a href={resume} target="_blank">Resume</a>
        <footer>
            <hr/>
            <h6>&copy;Copyright Jacob Ferreira - COMP229 - Fall 2024&copy;</h6>
        </footer>
        </>
    );
};

export default About;