// Products.jsx

import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

// importo il componente listato del prodotto
import ProductsList from '../components/ProductsList';



export default function Products() {

  // ottengo la categoria dall' url
  const { category } = useParams();

  // ottengo la query string
  const [searchParams] = useSearchParams();

  // estraggo il valore di search
  const searchQuery = searchParams.get("search");

  return (
    <div>Products
      <Link to={"/"}><button>Torna alla Home</button> </Link>
      <ProductsList category={category} searchQuery={searchQuery} />
    </div>
  )
}
