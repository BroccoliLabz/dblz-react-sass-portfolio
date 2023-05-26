import './intro.scss';
import { BsArrowBarDown as Arrow } from 'react-icons/bs';

export default function Intro({ menuOpen, active }) {
  return (
    <div id='intro' className='intro gradient'>
      <div className={active ? 'left text-flicker-in-glow' : 'blocked left'}>
        <div className={(menuOpen && 'transparent') + ' imgContainer '}>
          <img src='assets/images/outsidemarsnobg.png' alt='' />
        </div>
      </div>
      <div className={active ? 'right text-flicker-in-glow' : 'blocked right'}>
        <div className='imgContainer text-flicker-in-glow'>
          <img src='assets/images/DBLZ.png' alt='' />
          <a
            href='https://www.patreon.com/dblz'
            target='_blank'
            rel='noreferrer'
          >
            become a Patron
            <img
              className='patreonpic'
              src='assets/images/patreon.png'
              alt=''
            />
          </a>
        </div>
        <a href='#latest'>
          <Arrow
            className={'icon text-flicker-in-glow ' + (active && 'active')}
          />
        </a>
      </div>
    </div>
  );
}
