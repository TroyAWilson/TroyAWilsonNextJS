import SingleProj from "./singleProj";

const AllProjs = () => {

    const projList = [
        {
            title:'PokéInfo',
            thumbnail:'./pokeinfo-thumb.png',
            page:'pokeinfo',
        },
        {
            title:"NASA's Neurodiversity Network (N3)",
            thumbnail:'./n3-thumb.png',
            page:'n3',
        },
        {
            title:"Let's Watch",
            thumbnail:'./lw-thumb.png',
            page:'letswatch',
        },
        {
            title:"Where's Wallabies?",
            thumbnail:'./ww-thumb.png',
            page:'whereswallabies',
        },
        
        {
            title:'Worm',
            thumbnail:'./worm-thumb.png',
            page:'worm',
        },
        {
            title:'Draught Services',
            thumbnail:'./ds-thumb.png',
            page:'draughtservices',
        },
        {
            title:'Neil Gehrels Swift Observatory',
            thumbnail:'./swift-thumb.png',
            page:'swift',
        },
        {
            title:'Pentago',
            thumbnail:'./pentago-thumb.png',
            page:'pentago',
        },
        {
            title:'FERMI GAMMA-RAY SPACE TELESCOPE',
            thumbnail:'./fermi-thumb.png',
            page:'fermi',
        },
        {
            title:'FireStop',
            thumbnail:'./firestop-thumb.png',
            page:'firestop',
        },
        {
            title:'Eclipse Megamovie 2024',
            thumbnail:'./emm-thumb.png',
            page:'eclipse',
        },
        {
            title:'Wordle',
            thumbnail:'./wordle-thumb.png',
            page:'wordle',
        },
        
        
    ]

    return(
        <div style={{marginTop:'1%', display:'flex', margin:'auto', flexDirection:'column'}}>
            <h2 style={{textAlign:'center'}}>All Projects</h2>
            <div style={{color:'white', marginTop:'1%', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {projList.map((project, index)=>
                    <SingleProj key={index} projectInfo={project} index={index}/>
                )}
            </div>
        </div>
    )
}

export default AllProjs;