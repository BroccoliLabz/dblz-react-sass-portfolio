import './app.scss'
import { useState , useRef } from 'react'
import { useScrolling } from "react-use"
import Topbar from "./components/topbar/Topbar"
import Menu from "./components/menu/Menu"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Latest from './components/latest/Latest'
import Hangman from './components/hangman/Hangman'


function App() {
  const scrollRef = useRef(null);
  const scrolling = useScrolling(scrollRef);
  const [menuOpen,setMenuOpen] = useState(false)
  const sections = [
    {
      id:0,
      path:'intro',
      title:'Home'
    },
    {
      id:1,
      path:'latest',
      title:'Latest'
    },
    {
      id:2,
      path:'hangman',
      title:'Hangman'
    },
    {
      id:3,
      path:'portfolio',
      title:'Discography'
    },
    {
      id:4,
      path:'projects',
      title:'Ventures'
    },
    {
      id:5,
      path:'contact',
      title:'Links'
    }
  ]

  return (
    <div className='app'>
      <div className='vidContainer'>
        <iframe
          controls
          loop
          className='vid'
          width='560'
          height='315'
          src='https://www.youtube-nocookie.com/embed/nE12QuQJa6I?autoplay=1'
          title='YouTube video player'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu sections={sections} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div id='sections' className='sections' ref={scrollRef}>
        <Intro active={!scrolling} menuOpen={menuOpen} />
        <Latest active={!scrolling} />
        <Hangman active={!scrolling} />
        <Portfolio active={!scrolling} />
        <Projects active={!scrolling} />
        <Contact active={!scrolling} />
      </div>
    </div>
  );
}

export default App;
