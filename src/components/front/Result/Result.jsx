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
import "./result.css"





const Result = ({ answers }) => {


    const [profile, setProfile] = useState("")

    // const [result, setResult] = useState("")

    // const finaly = []

    // const anality = () => {
    //     const t = answers.sort(function (a, b) { return b.points - a.points })

    //     if (t[0].points === t[1].points) {
    //         setResult(t[0].groupe + "/" + t[1].groupe)

    //     } else {
    //         setResult(t[0].groupe)
    //     }

    // }

    // useEffect(() => {
    //     anality()
    // }, [])


    return (
        <div className="result-main">
            <div className="result-container">
                <p> Votre profil DISC :</p>
                <div className="groupe">
                    {
                        answers.map(item =>
                            <div className="groupe">
                                <h3 className="rouge" onClick={() => setProfile("rouge")} >{item.rouge}</h3>
                                <h3 className="jaune" onClick={() => setProfile("jaune")} >{item.jaune}</h3>
                                <h3 className="vert" onClick={() => setProfile("vert")} >{item.vert}</h3>
                                <h3 className="blue" onClick={() => setProfile("blue")} >{item.blue}</h3>
                            </div>
                        )
                    }
                </div>
                <div className="points">
                    {answers.map(item => <h3>{item.points}  </h3>)}
                </div>
                {
                    profile.length === 0 ?
                        (
                            <div className="result-p">
                                <p> Ce profil est votre style propre. C’est celui que vous utiliser spontanément quand vous n’êtes pas contraint de vous adapter à une situation, quand vous ne subissez ni pression ni stress, ou que vous n’êtes pas dans l’obligation d’adapter votre profil de personnalité à un contexte.</p>
                            </div>
                        ) : (<div> </div>)

                }

            </div>
            <div>
                {profile === "rouge" ? (<Rouge profile={profile} />) : (<div> </div>)}
                {profile === "jaune" ? (<Jaune />) : (<div> </div>)}
                {profile === "vert" ? (<Vert />) : (<div> </div>)}
                {profile === "blue" ? (<Blue />) : (<div> </div>)}

            </div>
            {/* {profile.length > 0 ?
                (
                    <div className="autres-options">
                        <div><p>Envie de découvrir les autres profils ? </p></div>
                        <h3 className="rouge">Rouge</h3>
                        <h3 className="jaune">Jaune</h3>
                        <h3 className="vert">vert</h3>
                    </div>
                ) :
                (<div> </div>)} */}



        </div>
    )
}

export default Result
