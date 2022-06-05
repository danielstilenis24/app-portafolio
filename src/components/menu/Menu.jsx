import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href='#portafolio'>Portafolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href='#skills'>Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href='#certificados'>Certificados</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href='#contacto'>Contacto</a>
        </li>
      </ul>
    </div>
  );
}
