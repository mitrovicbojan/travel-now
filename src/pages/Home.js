import React, { Fragment } from 'react'
import Hero from './../components/Hero/Hero'
import Cities from './../components/Cities/Cities'
import useScrollToTop from '../hooks/useScrollToTop'


const Home = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero />
            <Cities />
        </Fragment>
    )
}

export default Home
