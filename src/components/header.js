import React from 'react'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
