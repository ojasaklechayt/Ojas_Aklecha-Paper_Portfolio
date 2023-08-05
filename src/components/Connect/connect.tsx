import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faBehance,
    faHashnode,
    faBloggerB
} from "@fortawesome/free-brands-svg-icons";
import "./connect.css";

const ComposeEmailButton = () => {
    const composeEmail = () => {
        const emailId = 'recipient@example.com';
        const subject = 'Hello!'; // You can set a predefined subject if needed

        // Create the mailto URL with the predefined email ID and subject
        const mailtoURL = `mailto:${emailId}?subject=${encodeURIComponent(subject)}`;

        // Redirect to the compose email page
        window.location.href = mailtoURL;
    };

    return (
        <button onClick={composeEmail} className="connect-button">
            <div className="connect-button__line"></div>
            <div className="connect-button__line"></div>
            <span className="connect-button__text">Send an Email</span>
            <div className="connect-button__drow1"></div>
            <div className="connect-button__drow2"></div>
        </button>
    );
};

const Connect = () => {
    return (
        <div className="connect">
            <div className="connect-title"><h1>Connect with me</h1></div>
            <div className="connect-text"><h3>Have any suggestion or interested in working together on a project? <br /> Go ahead, I would like to connect with you.</h3></div>
            <div className="connect-container">
                <ComposeEmailButton />
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/ojas-aklecha/" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/ojasaklechayt" className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.twitter.com/ojasaklecha" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.behance.net/ojas-aklecha" className="behance social">
                    <FontAwesomeIcon icon={faBehance} size="2x" />
                </a>
                <a href="https://ojasaklecha.hashnode.dev/" className="hashnode social">
                    <FontAwesomeIcon icon={faHashnode} size="2x" />
                </a>
                <a href="https://www.linkedin.com/newsletters/7048740989632466944/ " className="hashnode social">
                    <FontAwesomeIcon icon={faBloggerB} size="2x" />
                </a>
            </div>
        </div>
    );
}


export default Connect;