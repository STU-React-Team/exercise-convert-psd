import React from 'react'

export default function ContactAddress() {
    return (
        <div className="f-address col-xl-4 col-md-12 ">
            <h2 className="f-form-title">
               Address
            </h2>
            <ul className="f-address-list">
                <li>
                    <h5>Anhiora communication</h5>
                </li>
                <li>
                    <p>
                        Sevenoaks Rd
                    </p>
                    <p>Sevenoaks TN14 7HR, United Kingdom </p>
                </li>
                <li>
                    <p>
                        <i className="fab fa-facebook-square" />
                        Trần Hải
                    </p>
                </li>
                <li>
                    <p>
                        <i className="fab fa-twitter-square" /> 
                        0905888214
                    </p>
                </li>
                <li>
                    <p>
                        <i className="fas fa-envelope-square" />
                        trannamhai.dn@gmail.com
                    </p>
                </li>
                <li className="social-list"> 
                    <span className="fab fa-facebook-square" />
                    <span className="fab fa-twitter-square" />
                    <span className="fas fa-envelope-square" />
                </li>
            </ul>
        </div>
    )
}
