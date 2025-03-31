
import "../style/PageContactUs.css"

export default function ContactUs() {
    return (
        <>
            <div className='contactus-container'>
                <div className='container-up'>
                    <section>
                        <img src="../../img/location-add.png" alt="" />
                        <h3>Office</h3>
                        <p>Via dei Finti Acquisti, 123, 00100 Roma (RM), Italia</p>
                    </section>

                    <section>
                        <img src="../../img/sms.png" alt="" />
                        <h3>Email</h3>
                        <p>TechZoneSupport@gmail.com</p>
                    </section>

                    <section>
                        <img src="../../img/call-incoming.png" alt="" />
                        <h3>Phone</h3>
                        <p>+39 0123 456 789</p>
                    </section>
                </div>
            </div>

            <div className='message-us-container'>
                <div className='container-down'>
                    <div className='message-us'>
                        <h3>Message Us</h3>
                        <p>We're here to assist you every step of the way. Whether you have a question, need technical support, or simply want to share your feedback, our dedicated team is ready to listen and provide prompt assistance.</p>
                    </div>

                    <div className='form-email'>
                        <form>
                            <input type="text" placeholder='*Your Name' />
                            <input type="email" id="email" pattern=".+@example\.com" size="30" required placeholder='*Email' />

                            <textarea id="message" name="message" rows="4" required></textarea>

                            <button type="submit">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}
