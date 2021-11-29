import React from 'react'

export default function Hero(props) {
    return (
        <section className="hero bottom">
            <div className="container">
            <div className="row">
                <div className="hero-text-container">
                <div>
                    <h1>{props.title}</h1>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
