import React from 'react'

export default function ContactForm() {
    return (
        <div className="f-form-info col-xl-8 col-lg-8 col-md-12">
            <h2 className="f-form-title">
                Contact Form
            </h2>
            <div className="f-form-group row">
                <div className="f-form-input col-xl-4 col-md-12">
                    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="NAME" />
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EMAIL" />
                    <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="PHONE" />
                </div>
                <div className="f-form-cmt col-xl-8 col-md-12">
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="7" placeholder="COMMENTS" />
                    <button 
                        type="submit" 
                        className="f-btn-send" 
                        aria-label="Send Button"
                        value="SEND" >SEND</button>
                </div>
            </div>
        </div>
    )
}
