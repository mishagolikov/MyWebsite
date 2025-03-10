import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            {/* <a href="https://twitter.com/mishagolikov" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiTwitter />
            </a> */}
            <a href="https://www.linkedin.com/in/mishagolikov/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
            <a href="https://www.github.com/mishagolikov" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            
        </div> 
    ); 
}

export default Social;