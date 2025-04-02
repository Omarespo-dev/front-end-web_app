
import "../style/PageContactUs.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function ContactUs() {

    const form = useRef();

    emailjs.init("W5xfXyHQ6VJoj-d_4");

    // context gestione notifiche
    const { showNotification } = useContext(NotificationContext);

    const sendEmail = (e) => {
        e.preventDefault(); // Evita il refresh della pagina
    
        // Controlla se il modulo esiste
        if (!form.current) {
            console.error("Il modulo non è stato trovato.");
            return;
        }
    
        // Ottieni i dati del modulo
        const templateParams = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value,
        };
    
        // Debug: mostra i dati del modulo
        console.log("Dati del modulo:", templateParams);
    
        // Prima inviamo l'email a te (admin)
        emailjs.send(
            "service_x7ucbia",  // Service ID
            "template_30jspeg",  // Template ID per l'admin
            templateParams,     // Dati del modulo
            "W5xfXyHQ6VJoj-d_4" // Public Key
        )
        .then(
            (result) => {
                console.log("Email inviata con successo:", result.text);
                showNotification("Email sent successfully");
    
                // Resetta il modulo
                form.current.reset();
    
                // Ora inviamo l'email di conferma all'utente
                emailjs.send(
                    "service_x7ucbia",  // Inserisci lo stesso Service ID
                    "template_kpt7rbk",  // Template ID per l'utente
                    templateParams,     // Dati del modulo
                    "W5xfXyHQ6VJoj-d_4" // Public Key
                )
                .then(
                    (result) => {
                        console.log("Email di conferma inviata con successo:", result.text);
                    },
                    (error) => {
                        console.error("Errore nell'invio dell'email di conferma:", error.text);
                    }
                );
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
