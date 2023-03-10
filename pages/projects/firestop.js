import Project from "./projectTemplate";

const Firestop = () => {
    const ProjectInfo = {
        title:"FireStop",
        gif:null,
        screenshots:['firestop-images', 4],
        about:<p>After having lived through many wildfires and evacuations over the years, we noticed that no matter how prepared people think they are, there is inevitably an element of chaos to the process. We created FireStop to act as a specialized alternative to general social media, compiling important information all in one place to simplify the process of checking on loved ones and finding shelter.</p>,
        skills:['JavaScript', 'jQuery', 'Express.js', 'HTML', 'CSS', 'API integration'],
        links:{live:null, github:'https://github.com/willm0602/SSU-WICS-Hackathon-Project-Fall-2021', devpost:'https://devpost.com/software/fire-stop'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default Firestop;