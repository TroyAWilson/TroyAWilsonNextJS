import Project from "./projectTemplate";

const Pokeinfo = () => {
    const ProjectInfo = {
        title:'Pokeinfo',
        gif:['pokeinfogif-desktop.gif', 'pokeinfogif-tablet.gif', 'pokeinfogif-mobile.gif'],
        test:'pokeinfogif-tablet.gif',
        screenshots:['pokeinfo-images', 9],
        about:<p>PokéInfo is an exploration into Flask and utilizes the built-in Jinja templating engine in order to create an expansive site with unique pages for nearly <b>900</b> pokémon!</p>,
        skills:['Python','Flask + Jinja', 'JavaScript + jQuery', 'HTML', 'CSS', 'Love'],
        links:{live:'https://pokeinfoapp.herokuapp.com/', github:'https://github.com/TroyAWilson/poke_flask'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Pokeinfo;