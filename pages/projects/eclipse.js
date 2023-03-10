import Project from "./projectTemplate";

const Eclipse = () => {
    const ProjectInfo = {
        title:"Eclipse Megamovie 2024",
        gif:['eclipsegif-desktop.gif','eclipsegif-tablet.gif','eclipsegif-mobile.gif'],
        screenshots:['eclipse-images', 9],
        about:<p>This first-of-its-kind citizen science project resulted in a collection of tens of thousands of photos submitted by hundreds of volunteers from locations across the United States during and after the August 21, 2017, total solar eclipse.</p>,
        skills:['JavaScript','GatsbyJS', 'Strapi', 'GraphQL','HTML', 'CSS', 'Love'],
        links:{live:null, github:'https://github.com/TroyAWilson/letswatch'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Eclipse;