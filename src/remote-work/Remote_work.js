import style from './Remote_work.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Remote_work = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>Considering remote work options</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}
