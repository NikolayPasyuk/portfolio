import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.contactsForm}>
                    <input type="text" className={style.input} placeholder='Name'/>
                    <input type="text" className={style.input} placeholder='E-mail'/>
                    <textarea className={style.input} rows='5' placeholder='Message'/>
                    <button type='submit' className={style.button}>Send</button>
                </form>
            </div>
        </div>
    );
}
