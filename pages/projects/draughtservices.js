import Project from "./projectTemplate";

const Draught = () => {
    const testProjectInfo = {
        title:"Draught Services",
        gif:['dsgif.gif','dsgif-tablet.gif','dsgif-mobile.gif'],
        screenshots:['ds-images', 10],
        about:<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eros non sem tincidunt elementum vel sit amet quam.</p>,
        skills:['JavaScript', 'React', 'SQL', 'API Interface', 'HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/Draught_Services'}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default Draught;