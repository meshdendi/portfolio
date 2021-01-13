import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return(
    <footer className="text-center">
      <div className="container-fluid">
        Copyright © Abed Al Rahim Soubra 2020
        <p>
          <a href="https://github.com/meshdendi" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} 
                             size="lg"
                             className="mx-1" />
          </a>
          <a href="https://www.linkedin.com/in/abed-al-rahim-soubra-547657141/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} 
                             size="lg"
                             className="mx-1" />
          </a>
        </p>
      </div>
    </footer>  
  );
}

 export default Footer;