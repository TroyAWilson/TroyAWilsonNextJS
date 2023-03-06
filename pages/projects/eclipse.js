import Project from "./projectTemplate";

const Eclipse = () => {
    const testProjectInfo = {
        title:"Eclipse Megamovie 2024",
        gif:['eclipsegif-desktop.gif','eclipsegif-tablet.gif','eclipsegif-mobile.gif'],
        screenshots:['n3-images', 8],
        about:<p>Let’s Watch is an application to organize and enhance the experience of watching TV shows and films with friends.</p>,
        skills:['JavaScript','GatsbyJS', 'Strapi', 'GraphQL','HTML', 'CSS', 'Love'],
        links:{live:null, github:'https://github.com/TroyAWilson/letswatch'}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default Eclipse;