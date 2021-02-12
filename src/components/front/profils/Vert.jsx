import React, { useState } from 'react'
import "./style.css"
import profiles from "../../../Data/profiles.json"





const Vert = () => {



    return (
        <div className="profil">
            <div className="content-profile">
                <div className="titre"><h2>Profil dominant :  </h2> <h2 className="vert">VERT</h2></div>

                <div className="argument">
                    <div>
                        <p>Le vert est symbole de vie, de croissance, d’harmonie et de stabilité, tel cet arbre bien ancré par ses racines. C’est une couleur qui réconforte, détend et dont il fait bon s’entourer.</p>
                        <p>La composante verte décrit la manière dont une personne stabilise son environnement et réagit aux changements de rythme. Ce comportement résulte d’une orientation vers l’introversion dans un environnement perçu comme favorable.</p>
                        <p>Les personnes avec un profil à dominante “verte” sont souvent discrètes et coopératives. Elles perçoivent l’environnement de manière favorable/sociable et sont orientées vers l’introversion/réflexion.</p>
                        <h3>Le profil vert en quelques mots :</h3>
                        <p>Attentionné, à l’écoute, calme, compréhensif, consistant, coopérant, détendu, empathique, lent, loyal, patient.</p>
                    </div>
                </div>

                <div className="boite">
                    <div className="caractéristiques">
                        <div>
                            <h3>Les caractéristiques principales pour une personnalité à dominante verte :</h3>

                            <ul>
                                <li>Attention, stabilité et patience, aime les relations personnalisées.</li>
                                <li>Recherche la cohérence et l’harmonie, besoin d’anticiper.</li>
                                <li>N’aime pas les conflits, soutient et écoute activement les autres.</li>
                                <li>Recherche la sécurité et le sentiment d’appartenance.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="raca-space" >

                    </div>

                    <div className="caractéristiques">
                        <h3>Pour bien communiquer avec un interlocuteur à dominante verte, il faut :</h3>
                        <div>
                            <ul>
                                <li>Être empathique, relationnel et amical, créer une relation de partenariat et de solidarité.</li>
                                <li>Se donner du temps pour construire petit à petit la confiance.</li>
                                <li>NNe pas les exposer en leur demandant leur avis, les accompagner et les aider à décider.</li>
                                <li>Être patient et les mettre en confiance.</li>
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
                            Environnement perçu comme hostile, orienté vers l’action. <br />
                            “Je serai plus fort que mon environnement”.
                        </p>
                    </div>
                </div>
                <span class="ligne"> <hr /></span>


                <div className="argu-content">
                    <div className="title">
                        <p> Motivations   </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Diriger, gagner, décider, résoudre des problèmes Évoluer dans un monde de compétition et de pression. Agir rapidement et
                            faire plusieurs choses à la fois.
                        </p>
                    </div>
                </div>
                <span class="ligne"> <hr /></span>


                <div className="argu-content">
                    <div className="title">
                        <p> Peurs   </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Peur de perdre la face, peur que l’on profite de lui et peur de l’échec.
                        </p>
                    </div>
                </div>
                <span class="ligne"> <hr /></span>

                <div className="argu-content">
                    <div className="title">
                        <p> Causes de stress </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Déteste la lenteur, s’ennuie vite et redoute l’immobilisme
                        </p>
                    </div>
                </div>
                <div className="autres-options">
                    <h3 className="rouge">Rouge</h3>
                    <h3 className="jaune">Jaune</h3>
                    <h3 className="blue">Blue</h3>
                </div>
            </div>
        </div>
    )
}

export default Vert
