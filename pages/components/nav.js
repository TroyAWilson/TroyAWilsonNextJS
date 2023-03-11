import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Nav = () => {
    return(
        <div className='headerContainer'>
            <Link href='/'><h1 style={{margin:0}}>Troy A Wilson</h1></Link>
            <div style={{display:'flex', alignItems:'center', width:'150px', justifyContent:'space-between'}}>
                <a href="https://www.linkedin.com/in/thetroyawilson/" target='_blank'><LinkedInIcon style={{width:'30px', height:'30px'}}/></a>
                <a href="https://github.com/TroyAWilson" target='_blank'><GitHubIcon style={{width:'30px', height:'30px'}}/></a>
                <a href="./Resume.pdf" target='_blank'><b>Résumé</b></a>
            </div>
        </div>
  )
}
export default Nav;