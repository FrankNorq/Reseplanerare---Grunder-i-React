import { Outlet, NavLink } from "react-router-dom";

function HelpLayout() {
  return (
    <div>
      <h5>hej</h5>
      <nav>
        <NavLink to="/help/faq">FAQ</NavLink>
        <NavLink to="/help/contact">Contact</NavLink>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default HelpLayout;
