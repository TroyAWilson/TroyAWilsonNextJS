import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EastIcon from '@mui/icons-material/East';
import Hidden from '@mui/material/Hidden';



const FeaturedProjs = () => {

    const [currentProject, setCurrentProject] = useState(0);

    const changeProject = (value) => {
        let newProject = currentProject + value;
        if(newProject > featuredProjsList.length -1)
            newProject = 0;
        else if (newProject < 0)
            newProject = featuredProjsList.length -1;
        setCurrentProject(newProject);
    }

    //Gifs at around 480x200 pixels look the best, follow something within these dimensions when creating gifs
    //Currently recording the gifs in 1895x800, 815x800, 400x800 using screentogif
    //curret task is to try and reduce the gif sizes to salvage the gif idea, ~120 frames per gif
    const featuredProjsList = [
        {
            title:'PokéInfo',
            description:'PokéInfo is an exploration into Flask and utilizes the built-in Jinja templating engine in order to create an expansive site with unique pages for nearly 900 pokémon!',
            link:'/projects/pokeinfo',
            gif:['./pokeinfogif-desktop.gif','./pokeinfogif-tablet.gif','./pokeinfogif-mobile.gif']
        },
        {
            title:"NASA's Neurodiversity Network (N3)",
            description:"NASA's Neurodiversity Network (N3) is providing a pathway to NASA participation and STEM employment for neurodiverse learners, with a focus on those on the autism spectrum.",
            link:'/projects/n3',
            gif:['./n3gif-desktop.gif','n3gif-tablet.gif','n3gif-mobile.gif']
        },
        {
            title:"Eclipse Megamovie 2024",
            description:"This first-of-its-kind citizen science project resulted in a collection of tens of thousands of photos submitted by hundreds of volunteers from locations across the United States during and after the August 21, 2017, total solar eclipse.",
            link:'/projects/eclipse',
            gif:['eclipsegif-desktop.gif','eclipsegif-tablet.gif','eclipsegif-mobile.gif']
        },
    ];

    return(
        <Paper style={{marginTop:'1%'}} elevation={5}>
            <div style={{border:'15px solid #F8CE6B', position:'relative'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', backgroundColor:'rgba(0,0,0,0.8)', height:'100%', width:'100%', color:'white'}}>
                    
                    <ArrowBackIosIcon className='featuredButtons' onClick={()=>changeProject(-1)} style={{left:0}}/>
                    <ArrowForwardIosIcon className='featuredButtons' onClick={()=>changeProject(1)} style={{right:0}}/>

                    <div className='featuredContent'>
                        
                        <h1>{featuredProjsList[currentProject].title}</h1>
                        <p>{featuredProjsList[currentProject].description}</p>
                        <a href={featuredProjsList[currentProject].link}>
                            <div className='checkitoutbutton'>
                                <p>Check it out! </p> <EastIcon/> 
                            </div>
                        </a>
                    </div>
                </div>
                {/* mobile */}
                <Hidden smUp><img style={{width:'100%',}} src={featuredProjsList[currentProject].gif[2]}/></Hidden>
                {/* tablet */}
                <Hidden mdUp smDown><img style={{width:'100%',}} src={featuredProjsList[currentProject].gif[1]}/></Hidden>
                {/* desktop */}
                <Hidden mdDown><img style={{width:'100%',}} src={featuredProjsList[currentProject].gif[0]}/></Hidden>
            </div>
        </Paper>
    )
}

export default FeaturedProjs;