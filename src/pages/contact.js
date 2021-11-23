import React, { Component } from 'react'
import Footer from '../components/footer'
import NewsletterSignup from "../components/newsletterSignup"
import { Link } from 'gatsby'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="hero bottom">
                    <div className="container">
                    <div className="row">
                        <div className="hero-text-container">
                        <div>
                            <h1>Contact Us</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <div className="container bottom contact-form">
                    <div className="row">
                        <div className="col-sm-12"></div>
                        <div className="col-sm-12">
                            <div>
                                <div>
                                    <h2>Have a question? Ask our team.</h2>
                                </div>
                                <div>
                                    <p>Please complete the following form so we can get a better understanding of your needs.</p>
                                </div>
                            </div>
                            <form className="w-100 row mx-auto">
                                <label className="contact-input">
                                    <input type="text" placeholder="First Name" className="col-sm-12 w-100"/>
                                </label>
                                <label className="contact-input">
                                    <input type="text" placeholder="Last Name" className="col-sm-12 w-100"/>
                                </label>
                                <label className="contact-input">
                                    <input type="text" placeholder="Email" className="col-sm-12 w-100"/>
                                </label>
                                <label className="contact-input">
                                    <input type="text" placeholder="Phone" className="col-sm-12 w-100"/>
                                </label>
                                <label className="contact-input">
                                    <input type="text" placeholder="Company" className="col-sm-12 w-100"/>
                                </label>
                                <label className="contact-input">
                                    <input type="text" placeholder="Subject" className="col-sm-12 w-100"/>
                                </label>
                                <label className="contact-input">
                                    <textarea rows="10" className="w-100"/>
                                </label>
                                <label>
                                    <input type="submit" className="bg-light-blue btn-text" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <NewsletterSignup/>
                <Footer />
            </div>
        )
    }
}
