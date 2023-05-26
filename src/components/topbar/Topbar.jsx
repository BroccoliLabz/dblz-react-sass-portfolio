import './topbar.scss';
import { BsMailbox2 as Mail, BsPlayFill as Play } from 'react-icons/bs';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            DBL Z
          </a>

          <div className='itemContainer'>
            <Mail className='icon' />
            <a href='mailto:broccoli@broccolirecords.com'>
              <span>broccoli@broccolirecords.com</span>
            </a>
          </div>
        </div>
        <div className='right'>
          <Play
            className='toggler'
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
      </div>
    </div>
  );
}
