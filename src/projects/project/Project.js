import style from './Project.module.scss'
import Fade from 'react-reveal/Fade';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <Fade>
                <div className={style.image} style={props.style}>
                    <a href={props.href} className={style.link}>Look</a>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </Fade>
        </div>
    );
}
