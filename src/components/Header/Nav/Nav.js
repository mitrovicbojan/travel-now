import React from 'react';
import classes from './Nav.module.scss';
import Button from './../../../UI/Button/Button'
import { Link } from 'react-router-dom'

const Nav = ({isMenu, menuToggle}) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle}>
                    <Link to='/cities'>Cities</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to='/prices'>Prices</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/learnmore">Learn More</Link>
                </li>
            </ul>
            <Button className={classes.booknow} onClick={menuToggle}>Book Now</Button>
        </nav>
    )
}

export default Nav
