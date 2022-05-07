import style from './Remote_work.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Remote_work = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title text={'Considering remote work options'}/>
                <button type='submit' className={style.button}>Hire me</button>
            </div>
        </div>
    );
}
