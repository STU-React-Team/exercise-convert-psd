import React from 'react';
import ContactAddress from './ContactAddress';
import ContactForm from './ContactForm';
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer container-fluid">
            <div className="container">
                <div className="row">
                    <ContactForm /> 
                    <ContactAddress />
                </div>
            </div>
        </div>
    )
}
