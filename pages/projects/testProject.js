import Project from "./projectTemplate";

const TestProject = () => {
    const testProjectInfo = {
        title:'Pokeinfo',
        gif:'testgif4.gif',
        screenshots:['pokeinfo-images', 9],
        about:<p>PokéInfo is an exploration into Flask and utilizes the built-in Jinja templating engine in order to create an expansive site with unique pages for nearly <b>900</b> pokémon!</p>,
        skills:['Python','Flask + Jinja', 'JavaScript + jQuery', 'HTML', 'CSS', 'Love'],
        links:['https://pokeinfoapp.herokuapp.com/', 'https://github.com/TroyAWilson/letswatch']
    }

    return <Project projectInfo={testProjectInfo}/>
}

export default TestProject;