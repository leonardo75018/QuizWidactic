import React from 'react'
import "./style.css"




const Blue = () => {
    return (
        <div className="profil">
            <div className="content-profile">

                <div className="titre"><h2>Profil dominant :  </h2> <h2 className="jaune">Jeune</h2></div>

                <div className="argument">
                    <div>
                        <p>Symbolisée par la rigueur, la composante bleue décrit la manière dont une personne se conforme et réagit aux règles et aux procédures édictées par les autres. Ce comportement résulte d’une orientation vers la réflexion dans un environnement perçu comme hostile.</p>
                        <p>Les personnes avec un profil à dominante bleue perçoivent l’environnement de manière hostile, et sont orientées vers l’introversion/réflexion. Elles seront décrite par les autres comme des personnes factuelles, logiques, organisées, sachant organiser, structurer et contrôler.</p>

                        <h3>Le profil blue en quelques mots :</h3>
                        <p>Analytique, conventionnel, distant, exact, exigeant, factuel, précis, réaliste, et structuré.</p>
                    </div>
                </div>

                <div className="boite">
                    <div className="caractéristiques">
                        <div>
                            <h3>Les caractéristiques principales pour une personnalité à dominante blue :</h3>

                            <ul>
                                <li>Recherche des faits et des explications logiques.</li>
                                <li>Actions et prises de décisions prudentes, organisation, </li>
                                <li>N’aime pas les conflits, soutient et écoute activement les autres. structure et détails.</li>
                                <li>Objectif analytique et orienté vers la tâche, travail solitaire avec beaucoup de précision.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="raca-space" >

                    </div>

                    <div className="caractéristiques">
                        <h3>Pour bien communiquer avec un interlocuteur à dominante blue, il faut :</h3>
                        <div>
                            <ul>
                                <li>Être précis, factuel et structuré.</li>
                                <li>Préparer ses entretiens à l’avance.</li>
                                <li>Introduire le sujet, le contexte et valider le temps nécessaire.</li>
                                <li>Ne pas brusquer et être distant sans toucher la personne.</li>
                                <li>Ne pas chercher à réchauffer l’ambiance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space2"> </div>


            <div className="cara-content">

                <div className="argu-content">
                    <div className="title">
                        <p> Perception de son environnement    </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Perception défavorable de l’environnement et orienté vers l’introversion. <br />
                            “Je peux me conformer à mon environnement”.
                        </p>
                    </div>
                </div>
                <span className="ligne"> <hr /></span>


                <div className="argu-content">
                    <div className="title">
                        <p> Motivations   </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Se conformer à des standards élevés dans un environnement perçu de manière hostile.
                        </p>
                    </div>
                </div>
                <span className="ligne"> <hr /></span>


                <div className="argu-content">
                    <div className="title">
                        <p> Peurs   </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Peur de l’erreur, peur de perte de sécurité.
                        </p>
                    </div>
                </div>
                <span className="ligne"> <hr /></span>

                <div className="argu-content">
                    <div className="title">
                        <p> Causes de stress </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Craint la critique et n’aime pas être pris à l’improviste. N’aime pas travailler dans l’urgence. Craint l’absence de règles.
                        </p>
                    </div>
                </div>
                <div className="autres-options">
                    <h3 className="rouge">Rouge</h3>
                    <h3 className="jaune">Jaune</h3>
                    <h3 className="vert">vert</h3>
                </div>
            </div>
        </div>
    )
}

export default Blue
