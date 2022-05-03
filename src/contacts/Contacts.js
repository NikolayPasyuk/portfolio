import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="" className={style.contactsForm}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea className={style.textarea}/>
                </form>
                <button type='submit' className={style.button}>Send</button>
            </div>
        </div>
    );
}
