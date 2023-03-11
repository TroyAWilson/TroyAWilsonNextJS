import Project from "./projectTemplate";

const Pentago = () => {
    const ProjectInfo = {
        title:"Pentago",
        gif:['pentagogif-desktop.gif','pentagogif-tablet.gif','pentagogif-mobile.gif'],
        screenshots:['pentago-images', 6],
        about:<p>Pentago is a digital adaptation of the boardgame of the same name originally designed by Tomas Flodén</p>,
        skills:['JavaScript','React','HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/pentago'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Pentago;