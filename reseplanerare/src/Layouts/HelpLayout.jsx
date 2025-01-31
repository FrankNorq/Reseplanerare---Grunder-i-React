import { Outlet, NavLink } from "react-router-dom";

function HelpLayout() {
    return ( 
        <div>
            <h5>hej</h5>
            <nav>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact</NavLink>
            </nav>
        
        <Outlet></Outlet>
        </div>
     );
}

export default HelpLayout;