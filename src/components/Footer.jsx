import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareFacebook, faTwitter, faInstagram, faYoutube, faCcPaypal, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import React from 'react'

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
            <span>Free Shipping over 1000$</span>
          </section>

          <section>
            <img src="../../img/support.png" alt="" />
            <span>24/7 Support</span>
          </section>

        </div>

        <div className='second-container'>
          <ul >
            <li><h3>Company</h3></li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <FontAwesomeIcon icon={faCcPaypal} size="xl" style={{ color: "#ffffff", marginTop: "90px" }} className='set-icon-footer' />
            <FontAwesomeIcon icon={faCcMastercard} size="xl" style={{ color: "#ffffff", }} className='set-icon-footer' />
            <FontAwesomeIcon icon={faCcVisa} size="xl" style={{ color: "#ffffff", }} />
          </ul>

          <ul>
            <li><h3>Contact us</h3></li>
            <li>
              <img src="../../img/location.png" alt="" />
              Via dei Finti Acquisti, 123, 00100 Roma (RM), Italia
            </li>
            <li>
              <img src="../../img/call-calling.png" alt="" />
              +39 0123 456 789
            </li>

            <li>
              <img src="../../img/sms-edit.png" alt="" />
              TechZoneSupport@gmail.com
            </li>

          </ul>
          
          <ul>
            <li><h3>Social</h3></li>
            <li>
              <FontAwesomeIcon className='set-icon-footer' icon={faSquareFacebook} size="2xl"
                style={{ color: "#ffffff", }} />
              Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2xl" style={{ color: "#ffffff", }} className='set-icon-footer' />Twitter
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#ffffff", }} className='set-icon-footer' />Instagram
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} size="2xl" style={{ color: "#ffffff", }} className='set-icon-footer' />Youtube
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
