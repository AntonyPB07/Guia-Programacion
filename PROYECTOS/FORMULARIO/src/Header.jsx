export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Contactanos</li>
          <li>Sobre Nosotros</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function Navv(){
  return <p>Me están exportando</p>
}

export default Header

/*
export function Navv() --> Exporta específicamente la función Navv.
export default Header --> Exporta una entidad (en este caso, la función Header) como el valor por defecto del módulo.
*/