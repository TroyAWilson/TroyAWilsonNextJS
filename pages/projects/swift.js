import Project from "./projectTemplate";

const Swift = () => {
    const ProjectInfo = {
        title:"Neil Gehrels Swift Observatory",
        gif:['swiftgif-desktop.gif','swiftgif-tablet.gif','swiftgif-mobile.gif'],
        screenshots:['swift-images', 7],
        about:<p>Let’s Watch is an application to organize and enhance the experience of watching TV shows and films with friends.</p>,
        skills:['JavaScript','GatsbyJS','HTML', 'CSS'],
        links:{live:'https://swift.sonoma.edu/', github:null}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Swift;