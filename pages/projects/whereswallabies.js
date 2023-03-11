import Project from "./projectTemplate";

const WheresWallabies = () => {
    const ProjectInfo = {
        title:"Where's Wallabies?",
        gif:['wwgif.gif','wwgif.gif','wwgif.gif'],
        screenshots:['ww-images', 4],
        about:<p>Where’s Wallabies is a ResNet transfer learned machine learning model that works in tandem with <a href="https://github.com/microsoft/CameraTraps/blob/main/megadetector.md" target='_blank'><b>Microsoft’s CameraTrap MegaDetector</b></a> to find and identify animals from approximately <b>one hundred thousand</b> camera trap images.</p>,
        skills:['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'Jupyter Notebook'],
        links:{live:null, github:'https://github.com/TroyAWilson/Where-s-Wallabies'}
    }
    return <Project projectInfo={ProjectInfo}/>
}

export default WheresWallabies;