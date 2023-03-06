import Project from "./projectTemplate";

const WheresWallabies = () => {
    const testProjectInfo = {
        title:"Where's Wallabies?",
        gif:['wwgif.gif','wwgif.gif','wwgif.gif'],
        screenshots:['ww-images', 4],
        about:<p>Where’s Wallabies is a ResNet transfer learned machine learning model that works in tandem with Microsoft’s CameraTrap MegaDetector to find and identify animals from camera trap images.</p>,
        skills:['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'Jupyter Notebook'],
        links:{live:null, github:'https://github.com/TroyAWilson/Where-s-Wallabies'}
    }
    return <Project projectInfo={testProjectInfo}/>
}

export default WheresWallabies;