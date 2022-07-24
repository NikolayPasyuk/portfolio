import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Remote_work} from "./remote-work/Remote_work";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote_work/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
