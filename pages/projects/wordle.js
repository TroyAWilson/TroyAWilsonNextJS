import Project from "./projectTemplate";

const Wordle = () => {
    const ProjectInfo = {
        title:"Wordle",
        gif:['wordlegif-desktop.gif','wordlegif-tablet.gif','wordlegif-mobile.gif'],
        screenshots:['wordle-images', 8],
        about:<p>Recreation of the hit New York Times owned game, <a href="https://www.nytimes.com/games/wordle/index.html" target='_blank'><b>Wordle</b></a> in React.</p>,
        skills:['JavaScript','React', 'HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/Wordle_app'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Wordle;