

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";


//importo parte sales
import SalesHomepage from '../components/SalesHomepage';

// importo lista nuovi prodotti
import NewProductsList from '../components/NewProductsList';


export default function HomePage() {


  return (
    <>

      <div className='container-main'>

        <div className='container-jumbotron'>
          <div className='set-text-jumbotron'>
            <h1>Tech Zone</h1>
            <h2>"Join the <span>digital revolution" </span></h2>
            <Link to={"/products"}> <button className='explore-more'>Explore More</button> </Link>
          </div>


          <img src="../../img/jumbotron.png" alt="" />

        </div>
      </div>

      {/* CONTAINER NUOVI ARRIVI */}
      <div className='container-main-2'>
        <div className='container-card-newproducts'>
          <div className='new-product'>
            <h2>New products</h2>
            <Link to={"/products"}>View all <FontAwesomeIcon icon={faGreaterThan} /></Link>
          </div>


          <NewProductsList />


        </div>
      </div>
      {/* FINE CONTAINER NUOVI ARRIVI */}




      <div className='container-main-3'>
        <div className='set-bg'>

          <section className='celeste-bg'>
            <section className='container-img'>
              <h2>Iphone <span>14 Pro Series</span></h2>
              <img src="../../img/71pOW6LpyfL.png" alt="" />
            </section>

            <section className='container-button-view'>
              <h3>It feels good to be the first</h3>
              <p>Get ready for the next generation of smartphones. Discover innovation like never before. Stay tuned for the big iPhone 14 Pro reveal!</p>
              <Link to={"/product/iphone-14-pro"}>
                <button className='view-more'>View More</button>
              </Link>
            </section>
          </section>


          <section className='orange-bg'>
            <section className='container-img-2'>

              <section className='set-mac-container'>
                <h2>MacBook <span>Pro</span></h2>
                <img src="../../img/mac.png" alt="" />
                
                <Link to={"/product/macbook-pro-14-m1-pro"}>
                  <button className='buy-now'>View More</button>
                </Link>

              </section>

            </section>


          </section>
        </div>

      </div>

      <SalesHomepage />

      <div className='container-main-4'>
        <div className='set-bg-main-4'>
          <div className='first'>
            <div className='first-set'>
              <h1>SMART WATCH</h1>
              <p>Various designs and brands</p>
              <Link to={"/products/smartwatch"}> <button className='view-more-2'>View More</button> </Link>
            </div>
          </div>

          <div className='second'>
            <div>
              <img src="../../img/smartwatch.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </>


  )
}
