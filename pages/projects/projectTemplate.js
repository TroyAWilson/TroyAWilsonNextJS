import Hidden from '@mui/material/Hidden';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';

const Project = ({projectInfo}) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const changeImage = (value) => {
        let newProject = currentImage + value;
        if(newProject > imageList.length -1)
            newProject = 0;
        else if (newProject < 0)
            newProject = imageList.length -1;
        setCurrentImage(newProject);
    }
    
    let imageList = [];
    let directory = projectInfo?.screenshots[0];
    let numberOfImages = projectInfo?.screenshots[1];
    
    for(let i = 0; i < numberOfImages; i++)
        imageList.push(`/${directory}/image${i}.png`);

    return(
        projectInfo ? 
        <div>
        <div className='projectContainer'>
            <Hidden smUp>
                {projectInfo.gif ? <div className='projectGif' style={{backgroundImage:`url("/${projectInfo?.gif[2]}")`}} /> : null }    
            </Hidden>
            <Hidden mdUp smDown>
                {projectInfo.gif ? <div className='projectGif' style={{backgroundImage:`url("/${projectInfo?.gif[1]}")`}} /> : null }    
            </Hidden>
            <Hidden mdDown>
                {projectInfo.gif ? <div className='projectGif' style={{backgroundImage:`url("/${projectInfo?.gif[0]}")`}} /> : null }    
            </Hidden>
            <h1 style={{textDecoration:'underline'}}>{projectInfo.title}</h1>
            <div className='projectAboutContainer'>
                <div>
                    <h2>About</h2>
                    {projectInfo.about}
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <h3>What&apos;s it made with?</h3>
                        <ul>
                            {projectInfo.skills.map((skill,index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    
                    <div>
                        <h3>Where can I find it?</h3>
                        <ul>
                            {projectInfo.links.live ? <a className='projectLinks' href={projectInfo.links.live} target='_blank'><li>Live Link</li></a> : null }
                            {projectInfo.links.github ? <a className='projectLinks' href={projectInfo.links.github} target='_blank'><li>Github</li></a> : null }
                            {projectInfo.links.devpost ? <a className='projectLinks' href={projectInfo.links.devpost} target='_blank'><li>Devpost</li></a> : null }
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <h2>Screenshots</h2>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                    {imageList?.map((image,index) => <img className='projectScreenshot' key={index} src={`${image}`} />)}
                </div>
            </div>
        </div>
        </div>
        :
        <>loading</>
    )
}

export default Project;