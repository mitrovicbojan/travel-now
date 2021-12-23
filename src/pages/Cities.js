import React, { Fragment } from 'react'
import Hero from '../components/Hero/Hero'
import useScrollToTop from '../hooks/useScrollToTop'

const Cities = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero isDynamic>Cities</Hero>
        </Fragment>
    )
}

export default Cities