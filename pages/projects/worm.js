import Project from "./projectTemplate";

const Worm = () => {
    const testProjectInfo = {
        title:"Worm",
        gif:['wormgif.gif','wormgif-tablet.gif','wormgif-mobile.gif'],
        screenshots:['worm-images', 3],
        about:<p>Worm is a recreation of the classic game Snake built to be played within the terminal.</p>,
        skills:['C++','Linux Curses Library'],
        links:{live:null, github:'https://github.com/TroyAWilson/Worm'}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default Worm;