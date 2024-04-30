import "./Home.css";
import "./Pages.css";
import ram_img from "./Photos/ram_img.jpg";
import Valentime from "./Photos/Valentime.jpg";

import cover from "./Photos/cover.png";

function Home() {
  return (
    <>
      <div className="Image">
        <img src={cover} alt=""></img>
      </div>

      <h1 className="deal">BIGGEST DEALS ON TOP BRANDS</h1>
      <div className="Image">
        <img src={ram_img} alt=""></img>
      </div>
      <h2 className="Shop-title2">
        Present best gifts to your someone special💕
      </h2>
      <div className="Image">
        <img src={Valentime} alt=""></img>
      </div>
    </>
  );
}
export default Home;
