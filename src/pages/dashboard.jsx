import React from "react"
import Slideshow from "../components/pages/Slideshow"

const Dashboard = () => {
    return <>
        <h2 className="text-2xl font-semibold">Te damos la bienvenida a tu página de inicio</h2>
        <h3>Páginas recientes</h3>
        <Slideshow />
    </>
}

export default Dashboard