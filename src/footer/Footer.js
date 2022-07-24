import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faSkype, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <div>
                        <a href={"https://t.me/Nick_191"}>
                            <FontAwesomeIcon className={style.icon} icon={faTelegram}/>
                        </a>
                        <a href={"https://linkedin.com/in/nikolay-pasyuk-81b45123a"}>
                            <FontAwesomeIcon className={style.icon} icon={faLinkedin}/>
                        </a>
                        <a href={"https://secure.skype.com/live:kolyan-18121"}>
                            <FontAwesomeIcon className={style.icon} icon={faSkype}/>
                        </a>
                        <FontAwesomeIcon className={style.icon} icon={faEnvelope}/>
                    </div>
                    <p>All rights reserved 2022</p>
                </div>
            </Fade>
        </div>
    );

}
