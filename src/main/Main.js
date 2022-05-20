import style from './Main.module.css'
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
                    <span>Hi there</span>
                    <h1>I am Nikolay Pasyuk</h1>
                    <p className={style.visible}>FRONT-END DEVELOPER</p>
                </div>
            </div>
        </div>
    );
}