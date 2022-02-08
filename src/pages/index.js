import * as React from "react"
import NewsletterSignup from "../components/newsletterSignup"
import CalltoAction from "../components/callToAction"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BlogWidget from "../components/blogWidget"
import { Helmet } from "react-helmet"
import "./layout.css"
import Layout from "../components/layout"
import favicon from '../images/favicon.png'

const IndexPage = () => {
  return (
    <main>
      <Layout>
      <Helmet>
        <title>Milwaukee Accounting & Tax Firm | JB Tax & Accounting</title>
        <meta name="description" content="Helmet application" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="hero-text-container">
              <div>
                <h1>You run your business. We’ll handle your finances.</h1>
                <p>From bookkeeping to tax filing, we provide everything you need for a prosperous personal and professional life.</p>
              </div>
              <div>
                <button className="outline-btn white btn-text">
                  <Link className="cta -arrow " to="/contact">Let's Talk</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="up call-out">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mw-1200">
              <h4>With over 40 years of experience, we specialize in tailor made financial solutions for small businesses across the <span className="underline">Greater Milwaukee Area.</span></h4>
            </div>
          </div>
        </div>
      </section>
      <section className="up tb-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="home-service-item">
                <Link to="services/payroll">
                  <div className="service-img-container">
                    <StaticImage src="../images/payroll.png" alt="Payroll  Image" className="w-100 service-img"/>
                  </div>
                  <div className="service-meta-text">
                    <div>
                      <h3 className="title">Payroll</h3>
                    </div>
                    <div>
                      <p className="description">Our payroll services professionals are well versed on constantly changing federal, state and local laws and regulations, keeping payroll running smoothly no matter how large your business.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="home-service-item">
                <Link to="services/tax-preparation">
                  <div>
                    <StaticImage src="../images/tax-prep.png" alt="Payroll  Image" className="w-100 service-img"/>
                  </div>
                  <div className="service-meta-text">
                    <div>
                      <h3 className="title">Tax Preparation</h3>
                    </div>
                    <div>
                      <p className="description">Our professionals understand how the latest federal, state and local tax legislation affect you and your business and are constantly identifying new ways to reduce your tax liabilities.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="home-service-item">
                <Link to="services/bookkeeping-oversight">
                  <div>
                    <StaticImage src="../images/bookkeeping.png" alt="Payroll  Image" className="w-100 service-img"/>
                  </div>
                  <div className="service-meta-text">
                    <div>
                      <h3 className="title">Bookkeeping Oversight</h3>
                    </div>
                    <div>
                      <p className="description">Our professional bookkeeping service provides CPA-ready books, giving you more time to spend running your business making strategic decisions based on sound financial data.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="home-service-item">
                <Link to="/services/financial-reporting">
                  <div>
                    <StaticImage src="../images/financial-reporting.png" alt="Payroll  Image" className="w-100 service-img"/>
                  </div>
                  <div className="service-meta-text">
                    <div>
                      <h3 className="title">Financial Reporting</h3>
                    </div>
                    <div>
                      <p className="description">We work closely with your key personnel to develop and finalize accurate and financial statements that help you make timely business decisions.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section>
=======
      <section className="bg-light-grey tb-padding">
        <div className="container">
          <div className="row">
            <h3 className="color-blue">Milwaukee Accounting & Tax Firm</h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <p>At Jaybird Tax & Accounting, we provide more than accounting, bookkeeping and tax services to business in the Milwaukee Metropolitan area. We take a holistic approach to making your small businesses successful. We help you manage cash flow, develop a practical budget and select the entity that will bring the most tax advantages. </p>
            <p>Our valuable insight will not only allow you to manage your finances better but will guide your business to long-term growth and increased profitability. Discover how a seasoned Milwaukee tax & accounting firm with a solid understanding of how your business operates can develop strategies that will help you achieve your goals.</p>
          </div>
        </div>
      </section>

        {/*<section>
>>>>>>> 44f45ffbc3840c62aa5fa052daee273876e34ef8
        <div className="container">
          <div className="row">
            <BlogWidget />
          </div>
        </div>
      </section>*/}

      <CalltoAction />

      <NewsletterSignup />

      </Layout>
    </main>
  )
}

export default IndexPage
