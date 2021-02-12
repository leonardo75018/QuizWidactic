import React from 'react'
import "./style.css"




const Rouge = ({ result, setResult }) => {
    console.log(result)



    return (
        <div className="profil">

            <div className="content-profile">
                <div className="titre">
                    <h2>Votre Profil dominant :  </h2>
                    <div>
                        <div className="rouge_jaune">
                            <h2 className="vert">Vert</h2>
                            <h2>/</h2>
                            <h2 className="jaune">Jaune</h2>
                        </div>
                    </div>
                </div>

                <div className="argument">
                    <div>
                        <p>
                            Ce profil est votre style propre. C’est celui que vous utiliser spontanément quand vous n’êtes pas contraint de vous adapter à une situation, quand vous ne subissez ni pression ni stress, ou que vous n’êtes pas dans l’obligation d’adapter votre profil de personnalité à un contexte.
                       </p>
                    </div>
                </div>


                <div className="space2"> </div>

            </div>
        </div>
    )
}

export default Rouge
