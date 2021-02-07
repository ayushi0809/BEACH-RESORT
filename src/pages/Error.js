import React from 'react'
import Hero from '../component/Hero.js'
import Banner from '../component/Banner.js'
import {Link} from 'react-router-dom'
export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
            <Link to = "/" className = "btn-primary">
                Return To home page
            </Link>

             </Banner>
        </Hero>
    );

}

