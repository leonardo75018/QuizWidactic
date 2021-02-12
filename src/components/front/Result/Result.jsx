import React, { useState, useEffect } from "react"
import rouge from "../profils/Rouge"
import jaune from "../profils/Jaune"
import vert from "../profils/Vert"
import blue from "../profils/Blue"
import Rouge from "../profils/Rouge"
import Jaune from "../profils/Jaune"
import Vert from "../profils/Vert"
import Blue from "../profils/Blue"
import RougeJeune from "../profils/RougeJeune"
import BlueVert from "../profils/BlueVert"
import RougeBlue from "../profils/RougeBlue"
import RougeVert from "../profils/RougeVert"
import BlueJaune from "../profils/BlueJaune"
import VertJaune from "../profils/VertJeune"





const Result = ({ answers }) => {

    const [result, setResult] = useState("")

    const finaly = []

    const anality = () => {
        const t = answers.sort(function (a, b) { return b.points - a.points })

        if (t[0].points === t[1].points) {
            setResult(t[0].groupe + "/" + t[1].groupe)

        } else {
            setResult(t[0].groupe)
        }

    }

    useEffect(() => {
        anality()
    }, [])


    return (
        <div>
            {  result === "rouge" ? (<Rouge />) : (<div></div>)}
            {  result === "jaune" ? (<Jaune />) : (<div></div>)}
            {  result === "vert" ? (<Vert />) : (<div></div>)}
            {  result === "blue" ? (<Blue />) : (<div></div>)}
            {  result === "rouge/jaune" || result === "jaune/rouge" ? (<RougeJeune />) : (<div></div>)}
            {  result === "blue/vert" || result === "vert/blue" ? (<BlueVert />) : (<div></div>)}
            {  result === "rouge/blue" || result === "blue/rouge" ? (<RougeBlue />) : (<div></div>)}
            {  result === "rouge/vert" || result === "vert/rouge" ? (<RougeVert />) : (<div></div>)}
            {  result === "blue/jaune" || result === "jaune/blue" ? (<BlueJaune />) : (<div></div>)}
            {  result === "vert/jaune" || result === "jaune/vert" ? (<VertJaune />) : (<div></div>)}
        </div>
    )
}

export default Result
