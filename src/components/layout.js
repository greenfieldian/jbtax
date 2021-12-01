import React from 'react'
import Header from './header'
import Footer from './footer'

import '../pages/layout.css'

export default function Layout({children}) {
    return (
        <div>
            <Header />
                <main>{children}</main>
            <Footer />
        </div>
    )
}
