import React, {Fragment} from 'react';
import Button from './../../UI/Button/Button'
import coverVID from './../../assets/traveling-video.mp4'
import classes from './Hero.module.scss';

const HomePageContent = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>Europe is Waiting</h1>
                <span className={classes.hero__content__tagline}>Start packing right now</span>
                <p className={classes.hero__content__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel scelerisque urna, ac venenatis sapien. Cras imperdiet faucibus pulvinar. Nunc at nisl a odio tristique sodales eget non risus</p>
                <div className={classes.hero__content__cta}>
                    <Button>Book Now</Button>
                    <Button outline>Learn More</Button>
                </div>
        </Fragment>
    )
}

const Hero = ({ isDynamic, children }) => {
    return (
        <div className={classes.container}>
            <video autoPlay={true} muted loop className={classes.video} id={"video"} src={coverVID}></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    {!isDynamic && <HomePageContent />}
                    {isDynamic && (
                        <h1 className={classes.hero__content__title}>{children}</h1>
                    )}
                </div>                
            </div>
        </div>
    )
}

export default Hero
