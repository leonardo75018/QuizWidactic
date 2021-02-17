import React, { useState, useEffect } from 'react'
import "./end.css"
import { db } from "../../../db/Firebase"
import Result from "../Result/Result"
import Footer from "../Footer/Footer"



const End = ({ answers, setFinish }) => {







    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const textEnd = [
        "Impatient de connaître le résultat ?",
        "Saisissez votre adresse mail, on va vous en dire plus.",
    ]

    const [email, setEmail] = useState("")
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
        setFinish(true)



    }



    return (
        <div className="end-content">
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
                                    <input type="email" placeholder="Votre adresse mail"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <span className="error">{error}</span>

                                    <button className="btn-send" type="submit">Envoyer</button>
                                </form>
                                <div className="end-spa">

                                </div>

                            </div>
                        </div>
                    )
            }


            {
                valid === true ? null : <div className="end-space"></div>
            }


            {
                valid === true ? null : <Footer />
            }
        </div>
    )
}

export default End











