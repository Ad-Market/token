import IMG from "../assets/pic.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="grid grid-cols-3 md:flex gap-2 xl:gap-4">
        <button className="bg-transparent border-2 border-rose-500">
          Spotlight
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
        <button className="bg-transparent border-2 border-rose-500">
          COLLECGE
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
        <button className="bg-transparent border-2 border-rose-500">
          TINU
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
        <button className="bg-transparent border-2 border-rose-500">
          GLORY
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
      </div>
      <div className="my-12 flex flex-col md:flex-row items-center gap-4">
        <div className="text-white rounded-lg w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Memenation</h4>
            <p>22X</p>
          </div>
        </div>
        <div className="text-white rounded-lg w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Twoge Inu</h4>
            <p>11.5X</p>
          </div>
        </div>
        <div className="text-white rounded-lg w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Memenation</h4>
            <p>2X</p>
          </div>
        </div>
        <div className="text-white rounded-lg w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Memenation</h4>
            <p>22X</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
