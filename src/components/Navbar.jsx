import { cartWidget } from "./cartWidget"; 

export const NavBar = () => {
    return <>
    <h6>Tus Digitales</h6>
    <ul>
        <li><a href="#">impresiones</a></li>
        <li><a href="#">murales</a></li>
        <li><a href="#">fotolibros</a></li>
    </ul>
    <cartWidget/>
    </>
}