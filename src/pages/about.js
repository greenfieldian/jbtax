import React, { Component } from 'react'
import Hero from '../components/hero'
import Layout from '../components/layout'
import CalltoAction from '../components/callToAction'
import { Link } from 'gatsby'
import { BsPersonFill, BsNewspaper, BsFileEarmarkText, BsFile } from "react-icons/bs";
import Sidebar from '../components/sidebar'

export default class About extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Hero title="About Us"/>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div>
                                        <p>Jaybird is a different kind of accounting firm, made great by our exceptional talent, fueled by the entrepreneurial spirit and driven to serve our community. We are an agile and collaborative team, always looking for opportunities out of challenges and continually expanding our capabilities in service to you.</p>
                                        <p>Our method is to apply fresh thinking, leveraging a wide array of perspectives, to create innovative solutions and grow relationships. We engage with our clients, colleagues and communities so that they thrive – today and into the future. This is what make us different – and makes a difference.</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <h3>John Smith</h3>
                                        <h4>Partner</h4>
                                        <a href="tel:4141414141"><p>(414)-141-4141</p></a>
                                        <h5>Biography</h5>
                                        <p>John has practiced in public accounting for over 25 years. He specializes in providing clients financial and tax services in a variety of businesses. John also prepares individual income tax returns and is an expert in family succession, trusts, and estate areas.

                                        John is a member of the American Institute of Certified Public Accountants (AICPA) as well as the Wisconsin Institute of Certified Public Accountants (WICPA).</p>
                                        <h5>Education</h5>
                                        <ul>
                                            <li>Bachelor’s Degree, University of Wisconsin</li>
                                            <li>Master’s Degree in Professional Accounting, University of Wisconsin</li>
                                        </ul>
                                        <h5>Certifications</h5>
                                        <ul>
                                            <li>Certified Public Accountant</li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div>
                                        <h3>Martin Crane</h3>
                                        <h4>Partner</h4>
                                        <a href="tel:4141414141"><p>(414)-141-4141</p></a>
                                        <h5>Biography</h5>
                                        <p>Martin has practiced in public accounting for over 25 years. He specializes in providing clients financial and tax services in a variety of businesses. Martin also prepares individual income tax returns and is an expert in family succession, trusts, and estate areas.

                                        Martin is a member of the American Institute of Certified Public Accountants (AICPA) as well as the Wisconsin Institute of Certified Public Accountants (WICPA).</p>
                                        <h5>Education</h5>
                                        <ul>
                                            <li>Bachelor’s Degree, University of Wisconsin</li>
                                            <li>Master’s Degree in Professional Accounting, University of Wisconsin</li>
                                        </ul>
                                        <h5>Certifications</h5>
                                        <ul>
                                            <li>Certified Public Accountant</li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div>
                                        <h3>Jack Beanstalk</h3>
                                        <h4>Partner</h4>
                                        <a href="tel:4141414141"><p>(414)-141-4141</p></a>
                                        <h5>Biography</h5>
                                        <p>Jack has practiced in public accounting for over 25 years. He specializes in providing clients financial and tax services in a variety of businesses. Jack also prepares individual income tax returns and is an expert in family succession, trusts, and estate areas.

                                        Jack is a member of the American Institute of Certified Public Accountants (AICPA) as well as the Wisconsin Institute of Certified Public Accountants (WICPA).</p>
                                        <h5>Education</h5>
                                        <ul>
                                            <li>Bachelor’s Degree, University of Wisconsin</li>
                                            <li>Master’s Degree in Professional Accounting, University of Wisconsin</li>
                                        </ul>
                                        <h5>Certifications</h5>
                                        <ul>
                                            <li>Certified Public Accountant</li>
                                        </ul>
                                    </div>
                                </div>
                                <Sidebar />
                            </div>
                        </div>
                    </section>
                    <CalltoAction />
                </Layout>
            </div>
        )
    }
}
