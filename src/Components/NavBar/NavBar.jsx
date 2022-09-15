
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navBar">
            <h2>
                <strong>Mi Ecommerce</strong>
            </h2>
            <div className='logoCarro'>
            <CartWidget/>
            </div>
            <ul>
                <li>Inicio</li>
                <li>Servicios</li>
            </ul>
        </div>        
    );
}

export default NavBar;