


function About({theme}){

    const textColor = theme == "dark" ? "text-black" : "text-white";
    const highlight = theme == "dark" ? "text-emerald-800" : "text-emerald-300";
    const bordercolor = theme == "dark" ? "border-gray-400" : "border-gray-800";


    return (
        <>
        <div className="col-span-1">
            <div className={`${bordercolor} ${textColor} mb-4 pb-3 border mx-7 rounded-lg flex flex-col text-center`}>
                <h1 className={` text-xl py-2 font-bold md:text-2xl`}>About</h1>
                <h1 className="text-lg md:text-xl font-semibold">contact : <span className="text-md md:text-lg font-mono">+91 6495840573</span></h1>
                <h1 className="text-lg md:text-xl font-semibold">Email : <span className="text-md md:text-lg font-mono">ram123@gmail.com</span></h1>
            </div>
        </div>
        </>
    );
}

export default About;
