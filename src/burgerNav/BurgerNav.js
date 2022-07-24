import style from './BurgerNav.module.scss'
import {Link} from "react-scroll"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const link = {
    activeClass: {style: style.active},
    to: "skills",
    spy: true,
    smooth: true,
    offset: 1,
    duration: 500
}

export const BurgerNav = () => {
    const [menuIsOpen, setBurgerMenu] = useState(false)

    const onBurgerBtnClick = () => {
        setBurgerMenu(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div
                className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="">Home</a>
                <Link {...link}>Skills</Link>
                <Link {...link} to="projects">Projects</Link>
                <Link {...link} to="contacts">Contacts</Link>
            </div>
            <FontAwesomeIcon onClick={onBurgerBtnClick} className={style.burgerBtn}
                             icon={faBars}/>
        </div>
    );
}
