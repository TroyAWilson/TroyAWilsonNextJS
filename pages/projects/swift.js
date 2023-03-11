import Project from "./projectTemplate";

const Swift = () => {
    const ProjectInfo = {
        title:"Neil Gehrels Swift Observatory",
        gif:['swiftgif-desktop.gif','swiftgif-tablet.gif','swiftgif-mobile.gif'],
        screenshots:['swift-images', 7],
        about:<p>Neil Gehrels Swift Observatory mission Education and Public Outreach (E/PO) page emphasises the goal to use the observations and scientific discoveries of the Swift mission to improve the understanding and utilization of science and mathematics concepts for grades 7-12.</p>,
        skills:['JavaScript','GatsbyJS','HTML', 'CSS'],
        links:{live:'https://swift.sonoma.edu/', github:null}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Swift;