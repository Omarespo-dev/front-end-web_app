import "../style/PageAboutUs.css"

export default function AboutUs() {
    return (
        <>
            <div className="container-about">
                <div className="jumbotron-about">
                    <img src="../../img/sfondo.png" alt="" />
                </div>

                <div className="jumbotron-text">
                    <p>Tech Zone is an innovative online store that offers a diverse selection of digital gadgets, available for purchase in both cash and installment options. Embodying the motto "Join the digital revolution today," the website not only provides a seamless shopping experience but also features a captivating blog section filled with insightful reviews, articles, and videos about cutting-edge technology and digital gadgets. Users can actively engage with the content through comments and a question-answer section, fostering a dynamic community of tech enthusiasts.</p>

                    <h4>Tech Zone Meaning</h4>
                    <p>The name "Tech Zone" cleverly combines two languages (English & German), signifying a home of technology that provides all the essential tech products and services, making it a one-stop destination for tech-savvy individuals seeking the latest and most exciting gadgets.</p>

                    <h4>Some of Tech Zone’s impressive features:</h4>
                    <p>Diverse digital gadgets for purchase in cash or installments</p>
                    <p>A blog with reviews and articles about the latest technology and gadgets</p>

                    <p>User comments and Q&A section for community interaction</p>

                    <p>Represents a tech-savvy "home" with all necessary technology</p>

                    <p>Easy-to-use interface for a great user experience</p>
                    <p>Consistent and visually appealing design</p>

                    <p>A hub for tech enthusiasts to connect and share insights</p>

                    <p>Helps users make informed purchase decisions</p>
                </div>
            </div>

            <div className='contactus-container'>
                <div className='container-up'>
                    <section>
                        <a href="https://maps.app.goo.gl/oPonZwuhzbqmKoUy9" target="_blank" > <img src="../../img/location-add.png" alt="" /> </a>
                        <h3>Office</h3>
                        <p>Via dei Finti Acquisti, 123, 00100 Roma (RM), Italia</p>
                    </section>

                    <section>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=TechZoneSupport2025@gmail.com" target="_blank" > <img src="../../img/sms.png" alt="" /> </a>
                        <h3>Email</h3>
                        <p>TechZoneSupport@gmail.com</p>
                    </section>

                    <section>
                    <a href="https://wa.me/+390123456789" target="_blank" > <img src="../../img/call-incoming.png" alt="" /></a>
                        <h3>Phone</h3>
                        <p>+39 0123 456 789</p>
                    </section>
                </div>
            </div>

        </>
    )
}
