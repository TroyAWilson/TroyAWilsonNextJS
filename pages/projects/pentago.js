import Project from "./projectTemplate";

const Pentago = () => {
    const ProjectInfo = {
        title:"Pentago",
        gif:['pentagogif-desktop.gif','pentagogif-tablet.gif','pentagogif-mobile.gif'],
        screenshots:['pentago-images', 6],
        about:<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eros non sem tincidunt elementum vel sit amet quam.</p>,
        skills:['JavaScript','React','HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/pentago'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Pentago;