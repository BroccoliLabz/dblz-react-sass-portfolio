import './menu.scss'
import Link from './Link'

export default function Menu({sections,menuOpen,setMenuOpen}) {
    const list = sections
    
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            {
                list.map((s) => (
                    <Link
                        key={s.id}
                        setMenuOpen={setMenuOpen}
                        path={s.path}
                        text={s.title}
                    />
                ))
            }
        </ul>
    </div>
  )
}
