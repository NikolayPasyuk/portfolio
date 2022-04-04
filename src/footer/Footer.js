import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Nikolay Pasyuk</h2>
                <div className={style.socialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    );
}
