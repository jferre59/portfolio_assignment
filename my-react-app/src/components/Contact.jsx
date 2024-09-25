//Jacob Ferreira - 301452914
//contact.jsx
import '../Contact.css';

const Contact = () => {
    return (
        <>
        <div>
            <panel>Contact: jferre59@my.centennialcollege.ca</panel>
        </div>
        <div>
            <form class="form" action="/" method="POST">
                <h4>Your Information:</h4>
                <label>First name: 
                    <input type="text" required placeholder="ex. Janet"/>
                </label>
                <br/>
                <label>Last name: 
                    <input type="text" required placeholder="ex. Smith"/>
                </label>
                <br/>
                <label class="phone">Contact #: 
                    <input type="tel" required placeholder="ex. 123-456-7890"/>
                </label>
                <br/>
                <label class="email">Email: 
                    <input type="email" required placeholder="ex. janet@smith.ca"/>
                </label>
                <br/>
                <h4>Message:</h4>
                <label><textarea name="additional_comments" rows="10" cols="85" required placeholder="Enter Message"></textarea></label>
                <br/>
                <input class="button" type="submit" value={"Get in touch!"}/>
                <input class="button" type="reset"/>
            </form>
        </div>
        </>
    );
};

export default Contact;