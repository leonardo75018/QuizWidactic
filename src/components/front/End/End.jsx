import React, { useState, useEffect } from 'react'
import "./end.css"
import { db } from "../../../db/Firebase"
import Result from "../Result/Result"


const End = ({ answers }) => {


    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const textEnd = [
        "Impatient de connaître le résultat ?",
        "Saisissez votre adresse mail, on va vous en dire plus.",
    ]

    const [email, setEmail] = useState("leo@gmail.com")
    const [error, setError] = useState("")
    const [valid, setValied] = useState(false)


    const rouge = 1
    const jaune = 2
    const vert = 3
    const blue = 5





    const checkEmail = (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setError("veuillez ajouter une adresse email")
            return
        }


        if (!EMAIL_REGEX.test(email)) {
            setError("veuillez utiliser une adresse email valide")
            return
        }
        sendEmail()

    }

    const sendEmail = async () => {
        const clientEmail = {
            email: email
        }
        const data = await db.collection("quiz").add(clientEmail)
        setValied(true)
    }



    return (
        <div>
            {
                valid === true ?
                    (<Result answers={answers} />) :
                    (
                        <div className="end" >
                            <div className="textEnd">
                                {textEnd.map((item, i) => <p key={i}>{item}</p>)}
                            </div>
                            <div className="form">
                                <form onSubmit={checkEmail}>
                                    <span className="error">{error}</span>
                                    <input type="email" placeholder="Votre adresse mail"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <button className="btn-send" type="submit">Envoyer</button>
                                </form>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default End
