import style from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div>
                <FontAwesomeIcon className={style.icon} icon={props.icon}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}
