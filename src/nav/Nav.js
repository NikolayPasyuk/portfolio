import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navLink} href="">Home</a>
            <a className={style.navLink} href="">Skills</a>
            <a className={style.navLink} href="">Projects</a>
            <a className={style.navLink} href="">Contacts</a>
        </div>
    );
}
