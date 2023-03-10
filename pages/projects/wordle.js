import Project from "./projectTemplate";

const Wordle = () => {
    const ProjectInfo = {
        title:"Wordle",
        gif:['wordlegif-desktop.gif','wordlegif-tablet.gif','wordlegif-mobile.gif'],
        screenshots:['wordle-images', 8],
        about:<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eros non sem tincidunt elementum vel sit amet quam.</p>,
        skills:['JavaScript','React', 'HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/Wordle_app'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Wordle;