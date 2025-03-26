import React from 'react'
import { Link } from 'react-router-dom'

// importo il componente listato del prodotto
import ProductsList from '../components/ProductsList';



export default function Products() {
  return (
    <div>Products
      <Link to={"/"}><button>Torna alla Home</button> </Link>
      <ProductsList />
    </div>
  )
}
