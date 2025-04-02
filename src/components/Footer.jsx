import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareFacebook, faTwitter, faInstagram, faYoutube, faCcPaypal, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom'

import "../style/Footer.css"
export default function Footer() {
  return (
    <footer>
      <div className='container-footer'>
        <div className='first-container'>

          <section>
            <img src="../../img/latest.png" alt="" />
            <span>Latest and Greatest Tech</span>
          </section>

          <section>
            <img src="../../img/guarantee.png" alt="" />
            <span>Guarantee</span>
          </section>

          <section>
            <img src="../../img/shipping.png" alt="" />
            <span>Free Shipping over 1000€</span>
          </section>

          <section>
            <img src="../../img/support.png" alt="" />
            <span>24/7 Support</span>
          </section>

        </div>

        <div className='second-container'>
          <ul >
            <li><h3>Company</h3></li>
            <Link to={"/aboutus"} style={{ textDecoration: "none" }} onClick={() => window.scrollTo(0, 0)}><li>About Us</li></Link>
            <Link to={"/contactus"} style={{ textDecoration: "none" }} onClick={() => window.scrollTo(0, 0)}><li>Contact Us</li></Link>
            <FontAwesomeIcon icon={faCcPaypal} size="xl" style={{ color: "#ffffff", marginTop: "90px" }} className='set-icon-footer' />
            <FontAwesomeIcon icon={faCcMastercard} size="xl" style={{ color: "#ffffff", }} className='set-icon-footer' />
            <FontAwesomeIcon icon={faCcVisa} size="xl" style={{ color: "#ffffff", }} />
          </ul>

          <ul>
            <li><h3>Contact us</h3></li>
            
            <li>
              <a href="https://maps.app.goo.gl/oPonZwuhzbqmKoUy9" target="_blank" > <img src="../../img/location.png" alt="" /></a>
              Via dei Finti Acquisti, 123, 00100 Roma (RM), Italia
            </li>


            <li>
              <a href="https://wa.me/+390123456789" target="_blank" ><img src="../../img/call-calling.png" alt="" /></a>
              +39 0123 456 789
            </li>

            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=TechZoneSupport2025@gmail.com" target="_blank" ><img src="../../img/sms-edit.png" alt="" /></a>
              TechZoneSupport2025@gmail.com
            </li>

          </ul>

          <ul id='ul-setted'>
            <li><h3>Social</h3></li>
            <li>
              <a href="https://www.facebook.com/?locale=it_IT" target="_blank"> <FontAwesomeIcon className='set-icon-footer' icon={faSquareFacebook} size="2xl"
                style={{ color: "#ffffff", }} /></a>
              Facebook
            </li>
            <li>
              <a href="https://x.com/"> <FontAwesomeIcon icon={faTwitter} size="2xl" style={{ color: "#ffffff", }} className='set-icon-footer' /></a>Twitter
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#ffffff", }} className='set-icon-footer' /></a>Instagram
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank"> <FontAwesomeIcon icon={faYoutube} size="2xl" style={{ color: "#ffffff", }} className='set-icon-footer' /></a>Youtube
            </li>
          </ul>


        </div>

        <div className='third-container'>
          <FontAwesomeIcon
            icon={faCopyright}
            style={{ color: "#ffffff" }}
          />
          <span>2025 Tech Zone.</span>

          <div>
            <span>Cookie Settings</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions </span>
          </div>

        </div>
      </div>
    </footer>
  )
}
