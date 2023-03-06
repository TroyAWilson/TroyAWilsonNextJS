import Project from "./projectTemplate";

const Swift = () => {
    const testProjectInfo = {
        title:"Neil Gehrels Swift Observatory",
        gif:['swiftgif.gif','swiftgif.gif','swiftgif-mobile.gif'],
        screenshots:['n3-images', 8],
        about:<p>Let’s Watch is an application to organize and enhance the experience of watching TV shows and films with friends.</p>,
        skills:['JavaScript','GatsbyJS','HTML', 'CSS'],
        links:{live:'https://swift.sonoma.edu/', github:null}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default Swift;