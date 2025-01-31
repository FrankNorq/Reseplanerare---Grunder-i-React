import { Outlet,NavLink } from "react-router-dom";
function RootLayout() {
    return ( 
        <div className="root-layout">
          <header>
            <h1>Reseplaneraren</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="addActivity">AddActivity</NavLink>
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
      );
}

export default RootLayout;