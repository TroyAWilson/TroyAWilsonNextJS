import Hidden from '@mui/material/Hidden';

const Project = ({projectInfo}) => {
    let imageList = [];
    let directory = projectInfo.screenshots[0];
    let numberOfImages = projectInfo.screenshots[1];
    
    for(let i = 0; i < numberOfImages; i++)
        imageList.push(`image${i}`);

    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Hidden smUp>
                {projectInfo.gif ? <div className='projectGif' style={{backgroundImage:`url("/${projectInfo.gif[2]}")`}} /> : null }    
            </Hidden>
            <Hidden mdUp smDown>
                {projectInfo.gif ? <div className='projectGif' style={{backgroundImage:`url("/${projectInfo.gif[1]}")`}} /> : null }    
            </Hidden>
            <Hidden mdDown>
                {projectInfo.gif ? <div className='projectGif' style={{backgroundImage:`url("/${projectInfo.gif[0]}")`}} /> : null }    
            </Hidden>
            <h1 style={{textDecoration:'underline'}}>{projectInfo.title}</h1>
            <div className='projectAboutContainer'>
                <div>
                    <h2>About</h2>
                    {projectInfo.about}
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div>
                        <h3>What's it made with?</h3>
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
                    {imageList?.map((image,index) => <img className='projectScreenshot' key={index} src={`/${directory}/${image}.png`} />)}
                </div>
            </div>
        </div>
    )
}

export default Project;