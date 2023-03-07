import Project from "./projectTemplate";

const Pentago = () => {
    const testProjectInfo = {
        title:"Pentago",
        gif:['','',''],
        screenshots:['pentago-images', 8],
        about:<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eros non sem tincidunt elementum vel sit amet quam.</p>,
        skills:['JavaScript','React','HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/pentago'}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default Pentago;