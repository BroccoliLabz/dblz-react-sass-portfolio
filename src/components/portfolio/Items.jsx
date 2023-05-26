import './items.scss'

export default function Items({id,src,title,active,setSelected,url}) {
  return (
        <div className={active ? 'items active shadow-drop-2-center': 'items'} onMouseOver={()=>(setSelected(id))} >
        <img src={src} alt={title} />
        <a href={url} target={"_blank"} rel="noreferrer">
          <h3 className={active ? 'tracking-in-expand': ''}>{title}</h3>
        </a>
    </div>
  )
}
