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
                <div>
                  <span>JB Tax and Accounting of Wisconsin, Inc.</span><br />
                  <span>10721 W. Capitol Drive Suite 105</span><br />
                  <span>Wauwatosa, WI 53222</span><br />
                  <span>Call us at (414) 885-0110</span>
                </div>
                <div>
                  <span>© JB Tax and Accounting of Wisconsin, Inc. 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
    )
}
