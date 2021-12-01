import React, { Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import NewsletterSignup from "../components/newsletterSignup"
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Form from '../components/form'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero title="Contact Us"/>
                <div className="container bottom contact-form">
                    <div className="row">
                        <div className="col-sm-12"></div>
                        <div className="col-sm-12">
                            <div>
                                <div>
                                    <h3>Have a question? Ask our team.</h3>
                                </div>
                                <div>
                                    <p>Please complete the following form so we can get a better understanding of your needs.</p>
                                </div>
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
                <NewsletterSignup/>
                <Footer />
            </div>
        )
    }
}
