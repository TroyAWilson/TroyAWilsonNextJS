import Project from "./projectTemplate";

const Wordle = () => {
    const testProjectInfo = {
        title:"Wordle",
        gif:['','',''],
        screenshots:['wordle-images', 3],
        about:<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eros non sem tincidunt elementum vel sit amet quam.</p>,
        skills:['JavaScript','React', 'HTML', 'CSS'],
        links:{live:null, github:'https://github.com/TroyAWilson/Wordle_app'}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default Wordle;