import style from './Nav.module.scss'
import {Link} from "react-scroll"

const link = {
    activeClass: {style: style.active},
    to: "skills",
    spy: true,
    smooth: true,
    offset: 1,
    duration: 500
}

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <Link {...link}>Skills</Link>
            <Link {...link} to="projects">Projects</Link>
            <Link {...link} to="contacts">Contacts</Link>
        </div>
    );
}
