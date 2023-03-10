import Project from "./projectTemplate";

const Fermi = () => {
    const ProjectInfo = {
        title:"FERMI GAMMA-RAY SPACE TELESCOPE",
        gif:['fermigif-desktop.gif','fermigif-tablet.gif','fermigif-mobile.gif'],
        screenshots:['fermi-images', 7],
        about:<p>Let’s Watch is an application to organize and enhance the experience of watching TV shows and films with friends.</p>,
        skills:['JavaScript','GatsbyJS', 'HTML', 'CSS'],
        links:{live:'https://fermi.sonoma.edu/', github:null}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Fermi;