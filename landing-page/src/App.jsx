import { useState } from "react"
import Navbar from "./component/Navbar/Navbar"
import Hero from "./component/Navbar/Hero"
import { useEffect } from "react";

function App() {

    const current_theme=localStorage.getItem("current_theme")
    const [theme,setTheme]=useState(current_theme?current_theme:"light");
    const bgcolor = theme == "dark" ? "bg-white" : "bg-black";

    useEffect(()=>{
        localStorage.setItem("current_theme",theme)

    },[theme])
    return (
        <>
        <div className={`${bgcolor} transition duration-300`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <Hero theme={theme} />
            
        </div>
        </>
    )
}

export default App
