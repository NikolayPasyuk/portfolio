import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (
        <div id='skills' className={style.skillsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={'Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'REACT/REDUX'} icon={faReact} description={
                            'Creating apps using React and TypeScript,\n' +
                            'Redux state management and using REST API.\n' +
                            'Engaged in refactoring, bug fixing.'}/>
                        <Skill title={'JavaScript/TypeScript'} icon={faJs}
                               description={'' +
                                   'Created Unit tests, Snapshot tests, component\n' +
                                   'views in Storybook.'}/>
                        <Skill title={'HTML5/CSS3'} icon={faHtml5} description={
                            'Experience in cross-browser, adaptive,\n' +
                            'responsive development, CSS-preprocessors.\n'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
