import React from 'react'
import Hero from '../component/Hero.js'
import Banner from '../component/Banner.js'
import {Link} from 'react-router-dom'
import RoomsContainer from '../component/RoomsContainer'
export default function Rooms(){
    return (
        <>
        <Hero  hero="roomsHero" >
            <Banner title="our rooms">
            <Link to = "/" className = "btn-primary">
                return to home page
            </Link>

             </Banner>
        </Hero>
        <RoomsContainer></RoomsContainer>
        </>
    );

}
