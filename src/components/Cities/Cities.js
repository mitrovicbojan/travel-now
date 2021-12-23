import React from 'react'

import classes from './Cities.module.scss'

import { IoLocationOutline } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'

import athensJPG from './../../assets/athens.jpg'
import londonJPG from './../../assets/london.jpg'
import berlinJPG from './../../assets/berlin.jpg'
import moscowJPG from './../../assets/moscow.jpg'
import parisJPG from './../../assets/paris.jpg'
import romeJPG from './../../assets/rome.jpg'


const citiesData = [
    {
        id: 1,
        city: "Athens",
        isFeatured: true,
        img: athensJPG    
    },
    {
        id: 2,
        city: "London",
        isFeatured: true,
        img: londonJPG
    },
    {
        id: 3,
        city: "Berlin",
        isFeatured: true,
        img: berlinJPG
    },
    {
        id: 4,
        city: "Paris",
        isFeatured: true,
        img: parisJPG
    },
    {
        id: 5,
        city: "Moscow",
        isFeatured: true,
        img: moscowJPG
    },
    {
        id: 6,
        city: "Rome",
        isFeatured: true,
        img: romeJPG
    },
    
]

const Cities = () => {
    return (
        <div className={classes.container}>
            <div className={classes.cities}>
                <div className={classes.cities__content}>
                    <h2 className={classes.cities__content__title}>Discover Europe</h2>
                    <div className={classes.cities__content__gallery}>
                        {citiesData.map(({id, city, isFeatured, img}) => (
                            <div className={classes.gallery__item} key={id}>
                                <img src={img} alt={city}  className={classes.gallery__item__img}/>
                                <div className={classes.overlay} />
                                <div className={classes.gallery__item__content}>
                                    <IoLocationOutline />
                                    <h2 className={classes.gallery__item__content__city}>
                                        {city}
                                    </h2>
                                </div>
                                {isFeatured && (
                                    <div className={classes.gallery__item__tag}>Featured</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={classes.cities__content__viewmore}>
                        <a href='/'>view more <BsArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities
