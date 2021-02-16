import React from 'react'
import "./style.css"

const Rouge = () => {
    return (
        <div id="profil-container">
            <div className="color">
                <h2> Profil dominant:</h2> &nbsp; <h2 className="jaune">JAUNE </h2>
            </div>
            <div className="descrip">
                <p>
                    C’est la couleur de la force, de l’activité, de la rapidité. Symbole de feu, le rouge est la lave, l’incandescence, la chaleur. Les rayons infrarouges procurent une sensation de chaleur. Cette couleur montre la détermination des personnes à agir.

                </p>
                <p>
                    C’est la couleur de la force, de l’activité, de la rapidité. Symbole de feu, le rouge est la lave, l’incandescence, la chaleur. Les rayons infrarouges procurent une sensation de chaleur. Cette couleur montre la détermination des personnes à agir.
                </p>
                <h5>Le profil jaune en quelques mots :</h5>
                <p>
                    Autoritaire, compétitif, courageux, décidé, déterminé, direct, énergique, entreprenant, exigeant, indépendant, meneur et rapide.
                </p>
            </div>

            <div className="about">
                <div className="carater">
                    <h5>Les caractéristiques principales pour une personnalité à dominante jaune :</h5>
                    <ul>
                        <li>Optimisme, enthousiasme, communication, actions et décisions spontanées.</li>
                        <li>Recherche l’estime et la reconnaissance, aime travailler en groupe.</li>
                        <li>Créativité, tendance à rêver, talent pour persuader et sens de l’improvisation</li>
                    </ul>

                </div>

                <div className="pour">
                    <h5>Pour bien communiquer avec un interlocuteur à dominante jaune, il faut :</h5>
                    <ul>
                        <li>Se montrer relationnel, chaleureux et enthousiaste, partager le plaisir et le laisser s’exprimer.</li>
                        <li>Etre créatif et informel, montrer à la personne que vous l’appréciez (vraiment) </li>
                        <li>Entrer dans son réseau d’influence.</li>
                    </ul>
                </div>
            </div>
            <div className="profil-space"></div>

            <div className="autres">
                <div className="autres-tile"> <h4>Perception de son environnement</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Perception favorable de l’environnement Orienté vers les autres et vers l’action.
                        “Je peux influencer mon environnement”.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Motivations</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Diriger, gagner, décider, résoudre des problèmes Évoluer dans un monde de compétition et de pression. Agir rapidement et faire plusieurs choses à la fois.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Peurs</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Peur de ne plus être aimé ou reconnu et peur de perdre sa liberté.
                    </p>
                </div>
                <div className="ligne"><hr /></div>


                <div className="autres-tile"> <h4>Causes de stress</h4> </div>
                <div className="autres-space"></div>
                <div className="autres-p">
                    <p>
                        Environnement conflictuel, règles, procédures, contraintes. Détails, rester sur place. Travailler de manière isolée.
                    </p>
                </div>
                <div className="ligne"><hr /></div>
            </div>
        </div>
    )
}

export default Rouge
