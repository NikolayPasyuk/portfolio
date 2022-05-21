import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faSkype, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <FontAwesomeIcon className={style.icon} icon={faEnvelope}/>
                    <FontAwesomeIcon className={style.icon} icon={faTelegram}/>
                    <FontAwesomeIcon className={style.icon} icon={faLinkedin}/>
                    <FontAwesomeIcon className={style.icon} icon={faSkype}/>
                </div>
                <p>All rights reserved 2022</p>
            </div>
        </div>
    );
}
