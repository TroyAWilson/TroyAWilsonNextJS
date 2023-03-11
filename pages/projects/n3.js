import Project from "./projectTemplate";

const N3 = () => {
    const ProjectInfo = {
        title:"NASA's Neurodiversity Network (N3)",
        gif:['n3gif.gif','n3gif-tablet.gif','n3gif-mobile.gif'],
        screenshots:['n3-images', 8],
        about:<p>NASA&apos;s Neurodiversity Network (N3) is providing a pathway to NASA participation and STEM employment for neurodiverse learners, with a focus on those on the autism spectrum.</p>,
        skills:['JavaScript','GatsbyJS', 'Strapi', 'GraphQL','HTML', 'CSS', 'Love'],
        links:{live:'https://n3.sonoma.edu/', github:null}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default N3;