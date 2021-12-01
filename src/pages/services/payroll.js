import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Helmet } from 'react-helmet'
import Hero from '../../components/hero'
import favicon from '../../images/favicon.png'
import Sidebar from '../../components/sidebar'
import NewsletterSignup from '../../components/newsletterSignup'
import Form from '../../components/form'
import placeholder from "../../images/placeholder.jpeg"
import form1 from "../../images/form-img-1.jpeg"
import form2 from "../../images/form-img-2.jpeg"
import form3 from "../../images/form-img-3.jpeg"
import form4 from "../../images/form-img-4.jpeg"

export default class Bookkeeping extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Helmet>
                        <title>Payroll | JB Tax & Accounting</title>
                        <meta name="description" content="Helmet application" />
                        <link rel="icon" href={favicon} />
                    </Helmet>
                    <Hero title="Payroll"/>
                    <section className="service-page-container">
                        <div className="container">
                            <div className="row">
                                <div>
                                    <h2 className="header">Overview</h2>
                                    <p>Jaybird is a different kind of accounting firm, made great by our exceptional talent, fueled by the entrepreneurial spirit and driven to serve our community. We are an agile and collaborative team, always looking for opportunities out of challenges and continually expanding our capabilities in service to you. Our method is to apply fresh thinking, leveraging a wide array of perspectives, to create innovative solutions and grow relationships. We engage with our clients, colleagues and communities so that they thrive – today and into the future. This is what make us different – and makes a difference.</p>
                                    <p>Jaybird is a different kind of accounting firm, made great by our exceptional talent, fueled by the entrepreneurial spirit and driven to serve our community. We are an agile and collaborative team, always looking for opportunities out of challenges and continually expanding our capabilities in service to you.</p>
                                </div>
                                <div className="bg-light-grey up tb-padding">
                                    <h3 className="header">Payroll services include:</h3>
                                    <ul className="d-flex flex-wrap">
                                        <li className="service-item">Quickbooks or other online accounting software setup and support</li>
                                        <li className="service-item">Printed checks, pay stubs and direct deposit</li>
                                        <li className="service-item">Attendance/time tracking and PTO accrual</li>
                                        <li className="service-item">Local, state and federal payroll tax filing</li>
                                        <li className="service-item">Certified Payroll</li>
                                        <li className="service-item">Billable vs. non-billable hours</li>
                                        <li className="service-item">Payroll processing outside regular schedule</li>
                                        <li className="service-item">Payroll garnishment accounting</li>
                                        <li className="service-item">Quickbooks or other online accounting software setup and support</li>
                                        <li className="service-item">Quickbooks or other online accounting software setup and support</li>
                                    </ul>
                                </div>
                                <section className="featured-slider tb-padding">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col text-center">
                                                <h2 className="header">Related Articles</h2>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="up">
                                    <div className="d-flex justify-content-between flex-wrap mb-3">
                                        <img src={form1} className="service-form-image mb-3 rounded"/>
                                        <img src={form2} className="service-form-image mb-3 rounded"/>
                                        <img src={form3} className="service-form-image mb-3 rounded"/>
                                        <img src={form4} className="service-form-image mb-3 rounded"/>
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <h4>Schedule Your Free Payroll Consultation Today!</h4>
                                        </div>
                                        <Form />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-container">
                            <Sidebar />
                        </div>
                    </section>
                    <NewsletterSignup/>
                </Layout> 
            </div>
        )
    }
}