import React from 'react'
import classes from './Logo.module.scss'
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/' className={classes.logo}>
            <span>Travel Europe</span>
        </Link>
    )
}

export default Logo
