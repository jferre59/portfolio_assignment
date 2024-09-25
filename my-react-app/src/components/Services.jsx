//Jacob Ferreira - 301452914
//services.jsx

import image1 from '../laptop.jpg'
import image2 from '../triangle.jpg'
import image3 from '../code.jpg'
const Services = () => {
    return (
        <>
        <h3>So, what's in it for you?</h3>
        <img src={image1} alt="Laptop with Code"></img>
        <h4>Front-End Development</h4>
        <img src={image2} alt="Time, Cost, Quality"></img>
        <h4>Project Management</h4>
        <img src={image3} alt="Code"></img>
        <h4>General Programming</h4>
        </>
    )
};

export default Services;