import React from 'react'
import { Link } from 'react-router-dom'



export default function Products() {
  return (
    <div>Products
         <Link to={"/"}><button>Torna alla Home</button> </Link>
    </div>
  )
}
