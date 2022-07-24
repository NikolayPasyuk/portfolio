import style from './Remote_work.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';

export const Remote_work = () => {
    return (
        <div className={style.remoteBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                    <Title text={'Considering remote work options'}/>
                    <button type='submit' className={style.button}>Hire me</button>
                </div>
            </Fade>
        </div>
    );
}
