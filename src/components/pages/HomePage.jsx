import React from 'react'

import { Link } from 'react-router-dom'


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
    </>


  )
}
