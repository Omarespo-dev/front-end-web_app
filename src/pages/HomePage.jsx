

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

// Importo cuore
import Heart from '../components/Heart';

export default function HomePage() {



  return (
    <>
      {/* <Link to={"/allproducts"}><button>Prodotti</button> </Link> */}

      <div className='container-main'>

        <div className='container-jumbotron'>
          <div className='set-text-jumbotron'>
            <h1>Tech Zone</h1>
            <h2>"Join the <span>digital revolution" </span></h2>
            <button className='explore-more'>Explore More</button>
          </div>


          <img src="../../img/jumbotron.png" alt="" />

        </div>
      </div>

      <div className='container-main-2'>
        <div className='container-card-newproducts'>
          <div className='new-product'>
            <h2>New products</h2>
            <a href="#">View all <FontAwesomeIcon icon={faGreaterThan} /></a>
          </div>

          <div className='card-container'>

            <section className='card-set'>

              <Heart />

              <div className='img-set-card'>
                <img src="../../img/iphone_14pro.png" alt="" />
              </div>

              <section>
                <p>Iphone 14 promax 256 giga</p>
              </section>

              <div className='hover-elements'>
                <button className='add-to-cart-btn'>
                  <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                </button>
              </div>

              <div className='add-cart'>
                <p>$1,399.00</p>
                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
              </div>


            </section>

            <section className='card-set'>

              <Heart />

              <div className='img-set-card'>
                <img src="../../img/acer_predator_helios_300.png" alt="" />
              </div>

              <section>
                <p>Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)</p>
              </section>

              <div className='hover-elements'>
                <button className='add-to-cart-btn'>
                  <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                </button>
              </div>

              <div className='add-cart'>
                <p>$1,399.00</p>
                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
              </div>

            </section>

            <section className='card-set'>
              <Heart />

              <div className='img-set-card'>
                <img src="../../img/realme_padx.png" alt="" />
              </div>

              <section>
                <p>Iphone 14 promax 256 giga</p>
              </section>

              <div className='hover-elements'>
                <button className='add-to-cart-btn'>
                  <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                </button>
              </div>

              <div className='add-cart'>
                <p>$1,399.00</p>
                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
              </div>


            </section>

            <section className='card-set'>
              <Heart />

              <div className='img-set-card'>
                <img src="../../img/garmin_forerunner_945.png" alt="" />
              </div>

              <section>
                <p>Iphone 14 promax 256 giga</p>
              </section>

              <div className='hover-elements'>
                <button className='add-to-cart-btn'>
                  <img src="../../img/shopping-cart.png" alt="" />Add to Cart
                </button>
              </div>

              <div className='add-cart'>
                <p>$1,399.00</p>
                <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
              </div>


            </section>

          </div>
        </div>
      </div>

      <div className='container-main-3'>
        <div className='set-bg'>

          <section className='celeste-bg'>
            {/* <img src="../../img/celeste.png" alt="" /> */}
          </section>
          

          <section className='orange-bg'>
            {/* <img src="../../img/orange-blue.png" alt="" /> */}
          </section>
        </div>

        
    
          
        


      </div>

    </>


  )
}
