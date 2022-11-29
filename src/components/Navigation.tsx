import {NavLink} from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <NavLink to='/' end={true}>Présentation</NavLink>
            </li>
            <li>
                <NavLink to='/affichage-conditionnel'>Affichage Conditionnel</NavLink>
            </li>
            <li>
                <NavLink to='/affichage-liste'>Les Listes</NavLink>
            </li>
            <li>
                <NavLink to='/affichage-dynamique'>Affichage Dynamique</NavLink>
            </li>
            <li>
                <NavLink to={'/memo'}>Memoization</NavLink>
            </li>
            <li>
                <NavLink to='/classe'>Classe Component</NavLink>
            </li>
            <li>
                <NavLink to='/effet'>Hook d'Effet</NavLink>
            </li>
            <li>
                <NavLink to='/parent'>Les Props</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'>Dashboard ( Local )</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard2'>Dashboard ( API )</NavLink>
            </li>

        </ul>
    </nav>
)

export default Navigation;