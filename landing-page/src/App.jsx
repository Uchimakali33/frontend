import { useState } from "react"
import Navbar from "./component/Navbar/Navbar"
import Hero from "./component/Navbar/Hero"
import Feature from "./component/Navbar/Feature"
import { useEffect } from "react";
import About from "./component/Navbar/About";
import Product from "./component/Navbar/Product";
import samsung from "./assets/samsung.jpg"
import oppo from "./assets/oppo.jpg"
import realme from "./assets/herobackground.jpg"
function App() {



    const current_theme=localStorage.getItem("current_theme")
    const [theme,setTheme]=useState(current_theme?current_theme:"light");
    const bgcolor = theme == "dark" ? "bg-white" : "bg-black";
    const bordercolor = theme == "dark" ? "border-gray-400" : "border-gray-800";
    const textColor = theme == "dark" ? "text-black" : "text-white";


    const name="Realme Narzo Turbo";
    const cost="$2000"
    const processor = "SnapDragon Gen 5s"

    useEffect(()=>{
        localStorage.setItem("current_theme",theme)

    },[theme])
    return (
        <>
        <div className={`${bgcolor} grid grid-col justify-center items-center transition duration-300`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <Hero theme={theme} />
            <Feature theme={theme}/>
            
            
            <div className={`rounded-lg ${textColor}`}>
                <h1 className="col-span-3 text-center text-xl md:text-3xl font-bold ">Product</h1>
                <div className={`mx-7 flex-col gap-3 rounded-lg mb-4 md:flex md:flex-row justify-evenly`} >
                    <Product img={oppo} theme={theme} name="Oppo Node 5" cost="$1500" processor="SnapDragon Gen6"/>
                    <Product img={samsung} theme={theme} name="Samgung" cost="$3000" processor="MediaTek Demensity"/>
                    <Product img={realme} theme={theme} name={name} cost={cost} processor={processor}/>
                </div>
            </div>
            <About theme={theme}/>
            
        </div>
        </>
    )
}

export default App
