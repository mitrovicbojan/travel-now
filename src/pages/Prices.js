import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero'
import useScrollToTop from '../hooks/useScrollToTop'

const Prices = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynamic>Prices</Hero>
        </Fragment>
    )
}

export default Prices