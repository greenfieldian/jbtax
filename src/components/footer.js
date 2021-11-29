import React from 'react'
import { Link } from "gatsby"

export default function Footer() {
    return (
    <footer className="footer-padding">
        <div className="container">
          <div className="row text-center">
            <div>
              <div className="footer-upper">
                <ul className="d-flex justify-content-between">
                  <li><Link>Terms of Use</Link></li>
                  <li><Link>Cookie Policy</Link></li>
                  <li><Link>Security Practices</Link></li>
                  <li><Link>Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="footer-lower">
                <span>© Jaybird Tax 2021</span>
              </div>
            </div>
          </div>
        </div>
    </footer>
    )
}
