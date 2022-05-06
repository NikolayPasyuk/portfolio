import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'REACT/REDUX'} description={
                        'Creating apps using React and TypeScript,\n' +
                        'Redux state management and using REST API.\n' +
                        'Engaged in refactoring, bug fixing.'}/>
                    <Skill title={'JavaScript/TypeScript'} description={'' +
                        'Created Unit tests, Snapshot tests, component\n' +
                        'views in Storybook.'}/>
                    <Skill title={'HTML5/CSS3'} description={
                        'Experience in cross-browser, adaptive,\n' +
                        'responsive development, CSS-preprocessors.\n'}/>
                </div>
            </div>
        </div>
    );
}
