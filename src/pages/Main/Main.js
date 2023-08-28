import React, { useState,useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import { LoaderComponent } from '../../utils/Loader';

function Main() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    if (!loading) {
        return (
            <div>
                <Helmet>
                    <title>{headerData.name} - Porfolio</title>
                </Helmet>

                <Navbar />
                <Landing />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Achievement />
                <Services />
                <Testimonials />
                {/* <Blog /> */}
                <Contacts />
                <Footer />
            </div>
        )
    }

    return (
        LoaderComponent()
    )

}

export default Main
