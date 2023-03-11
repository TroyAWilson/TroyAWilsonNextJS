import Project from "./projectTemplate";

const Fermi = () => {
    const ProjectInfo = {
        title:"FERMI GAMMA-RAY SPACE TELESCOPE",
        gif:['fermigif-desktop.gif','fermigif-tablet.gif','fermigif-mobile.gif'],
        screenshots:['fermi-images', 7],
        about:<p>NASA’s Fermi Gamma-ray Space Telescope was launched on June 11, 2008 into low Earth orbit, from which it continues to map the entire high-energy gamma-ray sky every ~three hours. The satellite’s name was chosen to honor the famous Italian-American physicist Enrico Fermi, who first proposed the eponymous mechanism for the acceleration of cosmic rays that creates many of the high-energy gamma rays that the satellite detects. NASA’s Fermi mission was built and is operated by an international collaboration between astrophysicists and particle physicists from the United States, Germany, Italy, Japan and Sweden.</p>,
        skills:['JavaScript','GatsbyJS', 'HTML', 'CSS'],
        links:{live:'https://fermi.sonoma.edu/', github:null}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Fermi;