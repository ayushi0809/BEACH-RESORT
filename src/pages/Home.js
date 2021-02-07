import React from 'react'
import Hero from '../component/Hero.js'
import Banner from '../component/Banner.js'
import {Link} from 'react-router-dom'
import Services from'../component/Services.js'
import FeaturedRooms from '../component/FeaturedRooms.js'

export default function Home(){
    return (
        <>
        <Hero>
             <Banner title="luxurios rooms" subtitle="delux roos starting at $299">
            <Link to = "/rooms" className = "btn-primary">
                our rooms
            </Link>

             </Banner>

        </Hero>
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
       
       </>
    );

}

