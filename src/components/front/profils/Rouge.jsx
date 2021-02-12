import React from 'react'
import "./style.css"




const Rouge = ({ result, setResult }) => {
    console.log(result)



    return (
        <div className="profil">

            <div className="content-profile">
                <div className="titre"><h2>Profil dominant :  </h2> <h2 className="rouge">Rouge</h2></div>

                <div className="argument">
                    <div>
                        <p>
                            C’est la couleur de la force, de l’activité, de la rapidité. Symbole de feu, le rouge est la lave, l’incandescence, la chaleur. Les rayons infrarouges procurent une sensation de chaleur. Cette couleur montre la détermination des personnes à agir.
                        </p>
                        Les personnes avec profil à dominante “rouge”  sont souvent franches et directes et aiment des défis. Elles perçoivent leur environnement comme hostile alors elles sont orientées vers l’extraversion et l’action.
                        <p>

                        </p>
                        <h3>Le profil juane en quelques mots :</h3>
                        <p>
                            Autoritaire, compétitif, courageux, décidé, déterminé, direct, énergique, entreprenant, exigeant, indépendant, meneur et rapide.
                        </p>
                    </div>
                </div>

                <div className="boite">
                    <div className="caractéristiques">
                        <div>
                            <h3>Les caractéristiques principales pour une personnalité à dominante rouge :</h3>

                            <ul>
                                <li>Rapidité, énergie, actions résolues, sens du résultat.</li>
                                <li>Compétitivité, recherche d’un maximum d’indépendance.</li>
                                <li>N’aime pas les conflits, soutient et écoute activement les autres.</li>
                                <li>Recherche d’un maximum de liberté pour se gérer et gérer les autres.</li>
                                <li> Orienté vers les résultats et plus que la relation, travailler rapidement et seul. </li>
                                <li>Décide rapidement.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="raca-space" >

                    </div>

                    <div className="caractéristiques">
                        <h3>Pour bien communiquer avec un interlocuteur à dominante rouge, il faut :</h3>
                        <div>
                            <ul>
                                <li>Aller droit au but, exposer ses objectifs et le questionner sur les siens</li>
                                <li>Etre concis et affirmé, aller droit à l’essentiel si vous ressentez de l’impatience chez votre interlocuteur </li>
                                <li>Valoriser ce qu’il a à gagner en allant dans votre sens, l’amener à être moteur et décideur</li>
                                <li>Le faire bouger si possible car il aura dès lors une meilleure écoute.</li>
                                <li>Valoriser son sens du défi et de la réactivité</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space2"> </div>



            </div>





            <div className="cara-content">

                <div className="argu-content">
                    <div className="title">
                        <p> Perception de son environnement    </p>
                    </div>

                    <div className="argu-space"></div>
                    <div className="descrip">
                        <p>
                            Environnement perçu comme hostile, orienté vers l’action. <br />
                           Je serai plus fort que mon environnement”.
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
                            Diriger, gagner, décider, résoudre des problèmes Évoluer dans un monde de compétition et de pression. Agir rapidement et faire plusieurs choses à la fois.
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

                <div className="autres">
                    <div><p>Envie de découvrir les autres profils ? </p></div>

                    <div className="autres-options">
                        <h3 className="jaune">Jaune</h3>
                        <h3 className="vert">Vert</h3>
                        <h3 className="blue">Blue</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Rouge
