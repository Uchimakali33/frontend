import heroimg from "../../assets/herobackground.jpg";

function Hero({ theme }) {
  const textcolor = theme == "dark" ? "text-black" : "text-white";
  const highlight = theme == "dark" ? "text-emerald-800":"text-emerald-300"
  const bordercolor=theme == "dark"? "border-gray-300":"border-gray-800"

  return (
    <>
      <div className={`${bordercolor} transition duration-300 grid grid-cols-1 mt-3 mx-5 md:mx-7 md:grid-cols-3 items-center md:mt-4 border rounded-lg `}>
        <div className="md:col-span-3 md:flex items-center">
            <h1
              className={`font-bold ${textcolor} mx-3 text-lg md:text-3xl text-center `}
            >
              Welcome, Having a Mobile is
              <span className={`${highlight} font-mono text-xl md:text-4xl`}> Necessary</span> Right
            </h1>
            <img className="col-span-2 w-150 h-75 md:w-200 md:h-100 rounded" src={heroimg} alt="" />
            
        </div>
      </div>
    </>
  );
}

export default Hero;
