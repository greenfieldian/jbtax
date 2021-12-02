import React from 'react'

export default function Form() {
    return (
        <form className="w-100 row mx-auto d-flex justify-content-between">
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
            <label className="">
                <textarea rows="10" className="w-100" placeholder="Message"/>
            </label>
            <label>
                <input type="submit" className="bg-light-blue btn-text" />
            </label>
        </form>
    )
}
