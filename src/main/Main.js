import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import sliderImage from "../assets/image/slider-bg.png";
import photoImage from '../assets/image/photo.jpg';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

export const Main = () => {
    const slider = {
        backgroundImage: `url(${sliderImage})`
    };
    const photo = {
        backgroundImage: `url(${photoImage})`
    }

    return (
        <div style={slider} className={styles.mainBlock}>
            <Fade>
                <div className={styleContainer.container}>
                    <Tilt className={styles.tilt} options={{max: 25}}>
                        <div style={photo} className={styles.photo}>
                        </div>
                    </Tilt>
                    <div className={styles.wrapper}>
                        <span>Hi THERE!</span>
                        <h1>I'm Nikolay Pasyuk</h1>
                        <p>FRONT-END DEVELOPER</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}