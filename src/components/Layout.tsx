import  Navbar  from './Navbar'	
import React from 'react'
import Footer from './Footer'

 const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
               <Footer />
        </>
    )
}

export default Layout;
