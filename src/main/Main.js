import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import sliderImage from "../assets/image/slider-bg.png";
import photoImage from '../assets/image/photo.jpg'

export const Main = () => {
    const slider = {
        backgroundImage: `url(${sliderImage})`
    };
    const photo = {
        backgroundImage: `url(${photoImage})`
    }

    return (
        <div style={slider} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div style={photo} className={style.photo}>
                </div>
                <div className={style.wrapper}>
                    <span>Hi THERE!</span>
                    <h1>I'm Nikolay Pasyuk</h1>
                    <p>FRONT-END DEVELOPER</p>
                </div>
            </div>
        </div>
    );
}