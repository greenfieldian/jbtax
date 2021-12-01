import React from 'react'
import { Link } from 'gatsby'
import { BsPersonFill, BsNewspaper, BsFileEarmarkText, BsFile } from "react-icons/bs";

export default function Sidebar() {
    return (
    <div className="about-sidebar">
        <div className="sidebar-section">
            <div className="d-flex">
                <div className="sidebar-icon">
                <BsPersonFill/>
                </div>
                <div className="sidebar-text">
                    <h4>Free Consultation</h4>
                    <p>We offer a free initial consultation to individuals and businesses.</p>
                    <Link>Get Started</Link>
                </div>
            </div>
        </div>
        <div className="sidebar-section">
            <div className="d-flex">
                <div className="sidebar-icon"><BsNewspaper /></div>
                <div className="sidebar-text">
                    <h4>Newsletter Sign-Up</h4>
                    <p>Receive tips, tax due dates and tax strategies in your inbox.</p>
                    <Link>Subscribe</Link>
                </div>
            </div>
        </div>
        <div className="sidebar-section">
            <div className="d-flex">
                <div className="sidebar-icon"><BsFileEarmarkText/></div>
                <div className="sidebar-text">
                    <h4>Send a File</h4>
                    <p>Use our secure file sharing tool to send files to our CPA firm.</p>
                    <Link>Send Files</Link>
                </div>
            </div>
        </div>
    </div>
    )
}
