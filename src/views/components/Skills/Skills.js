import './Skills.css'

export default function Skills() {
    return(
        <div class="skill">
            <h2 class="SkillsHeading">
                SKILLS
            </h2>
            
            <div id="skill-tabs">
                <div class="container">
                <div class="skills html">HTML</div>
                </div>

                <div class="container">
                <div class="skills css">CSS</div>
                </div>

                <div class="container">
                <div class="skills js">JS</div>
                </div>

                <div class="container">
                <div class="skills python">Python</div>
                </div>

                <div class="container">
                <div class="skills cplus">C++</div>
                </div>
                
            </div>
        </div>
    )
}