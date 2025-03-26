
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
// Importo cuore
import Heart from '../components/Heart';

export default function SalesHomepage() {
    return (
        <>
            <div className='container-main-2'>
                <div className='container-card-newproducts'>
                    <div className='new-product'>
                        <h2>Sales</h2>
                        <a href="#">View all <FontAwesomeIcon icon={faGreaterThan} /></a>
                    </div>

                    <div className='card-container'>

                        <section className='card-set'>


                            <div className="sconto-percentuale">
                                <Heart />
                                <span>-10%</span>
                            </div>

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
                                <s className="sconto">$1090.00</s>
                                <div className="set-sconto">
                                    <p>$1,399.00</p>
                                    <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
                                </div>

                            </div>


                        </section>

                        <section className='card-set'>

                            <div className="sconto-percentuale">
                                <Heart />
                                <span>-10%</span>
                            </div>

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
                                <s className="sconto">$1090.00</s>
                                <div className="set-sconto">
                                    <p>$1,399.00</p>
                                    <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
                                </div>
                            </div>

                        </section>

                        <section className='card-set'>
                            <div className="sconto-percentuale">
                                <Heart />
                                <span>-10%</span>
                            </div>

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
                                <s className="sconto">$1090.00</s>
                                <div className="set-sconto">
                                    <p>$1,399.00</p>
                                    <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
                                </div>
                            </div>


                        </section>

                        <section className='card-set'>
                            <div className="sconto-percentuale">
                                <Heart />
                                <span>-10%</span>
                            </div>

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
                                <s className="sconto">$1090.00</s>
                                <div className="set-sconto">
                                    <p>$1,399.00</p>
                                    <p><FontAwesomeIcon icon={faStar} style={{ color: "#004080", }} /> 4</p>
                                </div>
                            </div>


                        </section>

                    </div>
                </div>
            </div>
        </>
    )
}
