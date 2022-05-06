import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialImage from '../assets/image/social-network.jpg'
import todoImage from '../assets/image/todolist.jpg'


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, soluta'}/>
                    <Project style={todolist} title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi deleniti eaque maxime mollitia quidem'}/>
                </div>
            </div>
        </div>
    );
}
