// Products.jsx
import { useParams, useSearchParams, NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

// importo il componente listato del prodotto
import ProductsList from '../components/ProductsList';

import "../style/ProductsPage.css"
export default function Products() {

  // per la ricerca tramite searchbar
  const location = useLocation();
  const searchBarParams = new URLSearchParams(location.search);

  const query = searchBarParams.get("query") || "";
  const sortBy = searchBarParams.get("sortBy") || "recent"; // Default: recenti

  // ottengo la categoria dall' url
  const { category } = useParams();

  // ottengo la query string
  const [searchParams] = useSearchParams();

  // estraggo il valore di search
  const searchQuery = searchParams.get("search");

  return (<>

    <div className='categories'>

      <div className='contain'>

        <NavLink to={"/products"}  onClick={() => window.scrollTo(0, 0)} className="nav-link" end>
          <section>
            <img src="../../img/driver.png" alt="" />
            <p>All</p>
          </section>
        </NavLink>

        <NavLink to={"/products/sales"}  onClick={() => window.scrollTo(0, 0)} className="nav-link">
          <section>
            <img src="../../img/ticket-discount.png" alt="" />
            <p>Sales</p>
          </section>
        </NavLink>


        <NavLink to={"/products/smartphone"} onClick={() => window.scrollTo(0, 0)} className="nav-link">
          <section>
            <img src="../../img/mobile.png" alt="" />
            <p>Smartphone</p>
          </section>
        </NavLink>

        <NavLink to={"/products/pc"}  onClick={() => window.scrollTo(0, 0)} className="nav-link">
          <section>
            <img src="../../img/monitor.png" alt="" />
            <p>Pc</p>
          </section>
        </NavLink>

        <NavLink to={"/products/smartwatch"} onClick={() => window.scrollTo(0, 0)} className="nav-link">
          <section>
            <img src="../../img/watch-status.png" alt="" />
            <p>Smartwatch</p>
          </section>
        </NavLink>

        <NavLink to={"/products/tablet"}  onClick={() => window.scrollTo(0, 0)} className="nav-link">
          <section>
            <img src="../../img/tablet.png" alt="" />
            <p>Tablet</p>
          </section>
        </NavLink>
      </div>

    </div>
    <ProductsList category={category} searchQuery={searchQuery} query={query} sortBy={sortBy} />

  </>

  )
}
