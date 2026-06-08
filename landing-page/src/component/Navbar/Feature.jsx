import camera from "../../assets/camera.jpg";
import display from "../../assets/display.jpg";
import processor from "../../assets/processor.jpg";

function Feature({ theme }) {
  const textColor = theme == "dark" ? "text-black" : "text-white";
  const highlight = theme == "dark" ? "text-emerald-800" : "text-emerald-300";
  const bordercolor = theme == "dark" ? "border-gray-400" : "border-gray-800";

  return (
    <>
      <div className={`mx-7 ${textColor}`}>
        <h1 className={` text-center font-bold text-xl md:text-3xl my-3`}>Features</h1>
        <div className={`grid-cols-1 gap-3 md:grid-cols-3 md:flex justify-evenly`}>
          <div
            className={`border pb-3 ${bordercolor} shrink-0 md:shrink text-lg mb-5 md:text-xl rounded-lg`}
          >
            <img className="md:w-100 w-150 h-50 md:h-80 rounded-lg mb-2" src={display} />
            <h1 className="font-bold pb-2 pl-2 md:pl-4">Display</h1>
            <ul className="pl-6 text-md md:text-lg font-mono">
              <li>Amoled Display</li>
              <li>120Hz Refresh Rate</li>
              <li>4.6 inches thin Display</li>
            </ul>
          </div>
          <div
            className={`border ${bordercolor} shrink-0 md:shrink mb-5 text-lg md:text-xl rounded-lg`}
          >
            <img className="md:w-100 w-150 h-50 md:h-80 rounded-lg mb-2" src={camera} />
            <h1 className="font-bold pb-2 pl-2 md:pl-4">Camera</h1>

            <ul className="pl-6 text-md md:text-lg font-mono">
              <li>50MP Rear Camera</li>
              <li>16MP Front Camera</li>
              <li>Widen Lens for Good Quality</li>
            </ul>
          </div>
          <div
            className={`border ${bordercolor} shrink-0 md:shrink mb-5 text-lg md:text-xl rounded-lg`}
          >
            <img className="md:w-100 w-150 h-50 md:h-80 rounded-lg mb-2" src={processor} />
            <h1 className="font-bold pb-2 pl-2 md:pl-4">Processor</h1>
            <ul className="pl-6 text-md md:text-lg font-mono">
              <li>Octo Core Processor</li>
              <li>Clock speed of 2.5GHz</li>
              <li>High Speed Snapdragon 8Gen</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
