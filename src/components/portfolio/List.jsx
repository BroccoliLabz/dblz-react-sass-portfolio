import './list.scss'

export default function List({id,title,active,setSelected}) {
  return (
    <li className={active ? 'list1 active': 'list1'} onMouseOver={()=>setSelected(id)}>
        {title}
    </li>
    
  )
}
