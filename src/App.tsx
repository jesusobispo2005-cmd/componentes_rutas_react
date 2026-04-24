import { Link, Outlet } from "react-router";

function App() {

  return (
    <>
    <nav>
      <Link to="/contact" >Contactanos</Link><br></br><br></br>

      <Link to="/hijo" >Hijo</Link>
    </nav>
      
      <Outlet /> 
    </>
  );
}

export default App;