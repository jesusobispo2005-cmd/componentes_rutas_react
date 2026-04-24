import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>
        <Link to="/contact">Contactanos</Link>
        <p></p>
        <Link to="/hijo">Hijo</Link>
      </nav>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpapers-clan.com/wp-content/uploads/2026/02/lofi-datsun-240z-palm-trees-retro-sunset-desktop-wallpaper-cover.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapers-clan.com/wp-content/uploads/2025/05/cute-rabbit-cottage-core-kitchen-desktop-wallpaper-preview.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapers-clan.com/wp-content/uploads/2025/06/retro-sunset-drive-vaporwave-cityscape-desktop-wallpaper-preview.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <Outlet />
    </>
  );
}

export default App;