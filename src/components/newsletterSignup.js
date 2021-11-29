import React from 'react'


export default function NewsletterSignup() {
    return (
        <section className="newsletter-signup bg-dark-blue tb-padding">
            <div className="container">
                <div className="row text-center mw-1200">
                    <div className="col-sm-12">
                        <div className="text-wrapper component-main-text">
                            <h3>Stay Connected</h3>
                            <p>Get the latest news, financial management trends, emerging economic relief programs, legislation/tax updates, upcoming webinars and events delivered to your inbox.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 newsletter-form-container">
                        <form className="w-100 row ">
                           <label for="firstName" className="col-lg">
                                <input type="text" placeholder="First Name" name="firstName" className="w-100 signup-input"/>
                           </label>
                           <label for="lastName" className="col-lg">
                                <input type="text" placeholder="Last Name" name="lastName" className="w-100 signup-input"/>
                           </label>
                           <label for="firstName" className="col-lg">
                                <input type="email" placeholder="Email Address" name="email" className="w-100 signup-input"/>
                           </label>
                           <div className="col-lg">
                               <input type="submit" className="bg-light-blue btn-text"/>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
