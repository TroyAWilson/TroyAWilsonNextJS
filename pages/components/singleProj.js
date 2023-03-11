import Link from 'next/link'

const SingleProj = ({projectInfo,index}) => {

    return(
        projectInfo ?
        <div onClick={()=>console.log('help')} style={{display:'inline-flex', position:'relative', overflow:'hidden'}}>
            <Link style={{display:'flex'}} href={`./projects/${projectInfo.page}`}><img className='singleProjImage' src={projectInfo.thumbnail}/></Link>
            <div style={{color:'#F8CE6B',backgroundColor:'#333333', padding:'1% 10%', position:'absolute', bottom:0}}>
                <p>{projectInfo.title}</p>
            </div>
        </div>
        :
        <>loading</>
    )
}

export default SingleProj;