import '../css/skillsStyle.css';
import { DiJava, DiReact, DiMongodb, DiMysql, DiJavascript} from "react-icons/di";
import { SiCplusplus} from "react-icons/si";


export default function Skills() {
    return ( 
        <div class="skills-container" id="skills">
            <div class="title">
                <span>Skills</span>
                <h2>My Specialty</h2>
            </div>
            <div class="skills">
                <div class="java">
                    <DiJava style={{margin: "35px 120px 36px 70px", fontSize: '75px'}}/>
                    <h3 style={{margin: "-20px 0px 0px 86px"}}>Java</h3>
                </div>
                <div class="react">
                    <DiReact style={{margin: "35px 120px 36px 70px", fontSize: '75px'}}/>
                    <h3 style={{margin: "-20px 0px 0px 81px"}}>React</h3>
                </div>
                <div class="mongoDB">
                    <DiMongodb style={{margin: "35px 120px 36px 70px", fontSize: '75px'}}/>
                    <h3 style={{margin: "-20px 0px 0px 66px"}}>MongoDB</h3>
                </div>
                <div class="sql">
                    <DiMysql style={{margin: "35px 120px 36px 70px", fontSize: '75px'}}/>
                    <h3 style={{margin: "-20px 0px 0px 76px"}}>MySQL</h3>
                </div>
                <div class="javascript">
                    <DiJavascript style={{margin: "35px 120px 36px 70px", fontSize: '75px'}}/>
                    <h3 style={{margin: "-20px 0px 0px 65px"}}>JavaScript</h3>
                </div>
                <div class="cplusplus">
                    <SiCplusplus style={{margin: "35px 120px 36px 70px", fontSize: '75px'}}/>
                    <h3 style={{margin: "-20px 0px 0px 86px"}}>C + + </h3>
                </div>
            </div>
        </div>
    );
}