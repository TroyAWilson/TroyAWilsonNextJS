import Project from "./projectTemplate";

const LetsWatch = () => {
    const ProjectInfo = {
        title:"Let's Watch",
        gif:['lwgif.gif','lwgif.gif','lwgif.gif'],
        screenshots:['lw-images', 9],
        about:<p>Let’s Watch is an application to organize and enhance the experience of watching TV shows and films with friends.</p>,
        skills:['JavaScript', 'React', 'SQL', 'API Integration', 'HTML', 'CSS', 'Love'],
        links:{live:null, github:'https://github.com/TroyAWilson/letswatch'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default LetsWatch;