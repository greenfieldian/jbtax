import { Link } from 'gatsby'
import React from 'react'

export default function CalltoAction() {
    return (
        <section className="bg-light-blue tb-padding">
            <div className="container">
                <div className="row mw-1200">
                    <div className="col-sm-12 text-center">
                        <div className="text-wrapper component-main-text">
                            <h2>Let's Start a Conversation</h2>
                            <p>From startup to succession, business leaders and management teams, family members and next generations - We've seen it all. JB Tax is ready to serve your needs, at every stage. How can we help? Let's talk.</p>
                        </div>
                        <div>
                            <button className="bg-dark-blue btn-text">
                                <Link to="/contact">
                                    Contact Us <i></i>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
