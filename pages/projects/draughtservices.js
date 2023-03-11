import Project from "./projectTemplate";

const Draught = () => {
    const ProjectInfo = {
        title:"Draught Services",
        gif:['dsgif.gif','dsgif-tablet.gif','dsgif-mobile.gif'],
        screenshots:['ds-images', 10],
        about:<p>Draught Services is a class project that emphasises the relationship between frontend and backend development as well as the API&apos;s that connect them.</p>,
        skills:['JavaScript', 'React', 'SQL', 'API Interface', 'HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/Draught_Services'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Draught;