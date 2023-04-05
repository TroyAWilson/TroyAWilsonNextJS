import FeaturedProjs from './components/featuredProjs'
import AllProjs from './components/allProjs'

/*
  TODO:
  [] index about text
  [] record different sized gifs for phone / tablet / desktop
  [x] pokeinfo gifs
  [] pokeinfo expand about text
  [x] different third featured project
  [] n3 about text
  [] let's watch about text
  [] ww about text
  [] draught serv about
  [x] draught serv screenshots
  [x] draught serv gif(s)
  [x] swift gif(s)
  [] swift about
  [x] swift screenshots
  [x] pentago gif(s)
  [] pentago about
  [x] pentago screenshots
  [x] fermi gif(s)
  [] fermi about
  [x] fermi screenshots
  [] firestop about
  [x] eclipse gif(s)
  [] eclipse about
  [x] eclipse screenshots
  [x] wordle gif(s)
  [] wordle about
  [x] wordle screenshots
  [] update and link new resume
  [x] add to github
  [] deploy to heroku
*/
export default function Home() {

  return (
    <>
        <div className='textIntroCotnainer'>
          <h2>Greetings Travelers!</h2>
          <p style={{marginLeft:'15px'}}>Thanks for stopping by! I&apos;m currently working at Sonoma State Universities&apos; EdEon STEM program. Feel free to check out the projects anyway, they&apos;re pretty cool.</p>
        </div>
        
        <div className='featuredProjectsContainer'>
          <FeaturedProjs/>
        </div>
        
        <div className='allProjectsContainer'>
          <AllProjs />
        </div>
    </>
  )
}
