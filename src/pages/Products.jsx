// Products.jsx
import { Link, useParams, useSearchParams, NavLink } from 'react-router-dom'

// importo il componente listato del prodotto
import ProductsList from '../components/ProductsList';


export default function Products() {

  // ottengo la categoria dall' url
  const { category } = useParams();

  // ottengo la query string
  const [searchParams] = useSearchParams();

  // estraggo il valore di search
  const searchQuery = searchParams.get("search");

  return (<>
    <div className='categories'>

      <div className='contain'>

        <NavLink to={"/products"} className="nav-link" end>
          <section>
            <img src="../../img/driver.png" alt="" />
            <p>All</p>
          </section>
        </NavLink>

        <NavLink to={"/products/sales"} className="nav-link">
          <section>
            <img src="../../img/ticket-discount.png" alt="" />
            <p>Sales</p>
          </section>
        </NavLink>


        <NavLink to={"/products/smartphone"} className="nav-link">
          <section>
            <img src="../../img/mobile.png" alt="" />
            <p>Smartphone</p>
          </section>
        </NavLink>

        <NavLink to={"/products/pc"} className="nav-link">
          <section>
            <img src="../../img/monitor.png" alt="" />
            <p>Pc</p>
          </section>
        </NavLink>

        <NavLink to={"/products/smartwatch"} className="nav-link">
          <section>
            <img src="../../img/watch-status.png" alt="" />
            <p>Smartwatch</p>
          </section>
        </NavLink>


      </div>
      
    </div>
    <ProductsList category={category} searchQuery={searchQuery} />
   
  </>

  )
}
