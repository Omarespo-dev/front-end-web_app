
import "../style/PageContactUs.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {

    const form = useRef();

    emailjs.init("W5xfXyHQ6VJoj-d_4");

    const sendEmail = (e) => {
        e.preventDefault(); // Evita il refresh della pagina

        // Prima inviamo l'email a te (admin)
        emailjs.sendForm(
            "service_x7ucbia",     // <-- Inserisci il tuo Service ID
            "template_30jspeg",    // <-- Inserisci il tuo Template ID
            form.current,
            "W5xfXyHQ6VJoj-d_4"      // <-- Inserisci la tua Public Key
        )
            .then(
                (result) => {
                    console.log("Email inviata con successo:", result.text);
                    alert("Email inviata!");
                    
                    // Resetta il modulo
                    form.current.reset();

                    // Ora inviamo l'email di conferma all'utente
                    emailjs.sendForm(
                        "service_x7ucbia",     // Inserisci lo stesso Service ID
                        "template_kpt7rbk",    // Template ID per l'utente
                        form.current,
                        "W5xfXyHQ6VJoj-d_4"      // Inserisci la tua Public Key
                    )
                },
                (error) => {
                    console.error("Errore nell'invio dell'email:", error.text);
                }
            );
    };

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
                        <form onSubmit={sendEmail} ref={form}>
                            <input type="text" placeholder='*Your Name' name="user_name" />

                            <input type="email" id="email" name="user_email" size="30" required placeholder='*Email' />

                            <textarea style={{ fontFamily: "Inter" }} id="message" name="message" rows="4" required></textarea>

                            <button type="submit">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}
