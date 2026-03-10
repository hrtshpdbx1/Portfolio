"use client"
// Indique à Next.js que ce composant s'exécute côté client (par défaut Serveur)
// Obligatoire car on utilise le hook 'useState' et des événements interactifs.
import { useState } from 'react'
import React from 'react'
import { sendEmail } from '@/lib/sendEmail' // Importation du server action
import style from '../styles/ContactForm.module.css'

function ContactForm() {
    const [status, setStatus] = useState("") // pour afficher un message de retour à l'utilisateur (succès ou erreur)

    // Fonction déclenchée à la soumission. 'formData' contient automatiquement les données des champs
    async function handleAction(formData) {
        const result = await sendEmail(formData); // Appel asynchrone à la fonction d'envoi
        if (result.success) {
            setStatus("Email envoyé avec succès !");
        } else {
            setStatus("Erreur lors de l'envoi.");
        }
    }

    return (
        <div>
          <div className={style.contactFormContainer}>
                <form action={handleAction} 
                className={style.contactForm}>
                    <label htmlFor="forname">Prénom : </label>
                    <input 
                    
                        type="text"
                        id="forname"
                        name="forname"
                        placeholder="Ada"
                        required />

                    <label htmlFor="lastname">Nom : </label>
                    <input 
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Lovelace"
                        required />

                    <label htmlFor="email">E-mail : </label>
                    <input 
                        type="email"
                        id="from"
                        name="from"
                        placeholder="ada.byron@analytica.com"
                        required />

                    <label htmlFor="message">Message </label>
                    <textarea 
                        id="message"
                        name="message"
                        rows="4"
                        cols="50"
                        required />

                    <button
                        type="submit"
                        id="submitBtn"
                        className="btn btn-small">
                        Envoyer </button>
                </form>
                {/* Affichage conditionnel du message de statut */}
                {status && <p 
                className={style.sendStatus}>{status}</p>}
                <div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ContactForm