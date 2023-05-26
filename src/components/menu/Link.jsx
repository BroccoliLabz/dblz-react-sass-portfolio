import './link.scss'

export default function Link({setMenuOpen,path,text}) {
  function handleClick(){
    setMenuOpen(false)
    
  }

  return (
    <li onClick={() => handleClick()}>
        <a href={"#"+path+""} >{text}</a>
    </li>
  )
}
