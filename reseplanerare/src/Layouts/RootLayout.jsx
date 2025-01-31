import { Outlet,NavLink } from "react-router-dom";
function RootLayout() {
    return ( 
        <div className="root-layout">
          <header>
            <h1>Reseplaneraren</h1>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="addActivity">AddActivity</NavLink>
            <NavLink to="about">About Page</NavLink>
            </nav>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
      );
}

export default RootLayout;