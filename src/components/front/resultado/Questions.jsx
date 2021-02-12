import React, { useState, useEffect } from "react"
import "./questions.css"
import End from "../End/End"






function App() {

  const questions = [
    {//1
      a: {
        question: "Prudent et réfléchi\n",
        groupe: 4
      },
      b: {
        question: "Loyal et attentif à autrui\n",
        groupe: 3
      },
      c: {
        question: "Influent et démonstratif\n",
        groupe: 2
      },
      d: {
        question: "Stratège et entreprenant\n",
        groupe: 1
      }
    },
    {//2
      a: {
        question: "Sociable et familier\n",
        groupe: 2
      },
      b: {
        question: "Honnête et discret\n",
        groupe: 3
      },
      c: {
        question: "Énergique et orienté vers le résultat\n",
        groupe: 1
      },
      d: {
        question: "Méthodique et logique\n",
        groupe: 4
      }
    },
    {//3
      a: {
        question: "Calme et d'humeur égale\n",
        groupe: 3
      },
      b: {
        question: "Déterminé et aimant diriger\n",
        groupe: 1
      },
      c: {
        question: "Enjoué et rayonnant\n",
        groupe: 2
      },
      d: {
        question: "Formaliste et factuel\n",
        groupe: 4
      }
    },
    {//4
      a: {
        question: "Sûr de lui et volontaire\n",
        groupe: 1
      },
      b: {
        question: "Ordonné et concis\n",
        groupe: 4
      },
      c: {
        question: "Familier et stable\n",
        groupe: 3
      },
      d: {
        question: "Loquace et de bonne humeur\n",
        groupe: 2
      }
    },
    {//5
      a: {
        question: "Perspicace et impartial\n",
        groupe: 4
      },
      b: {
        question: "Exigeant et direct\n",
        groupe: 1
      },
      c: {
        question: "Constant et attaché aux valeurs\n",
        groupe: 3
      },
      d: {
        question: "Actif et liant\n",
        groupe: 2
      }
    },
    {//6
      a: {
        question: "Accommodant et serviable\n",
        groupe: 3
      },
      b: {
        question: "Plein d'espoir et expressif\n",
        groupe: 2
      },
      c: {
        question: "Influent et démonstratif\n",
        groupe: 1
      },
      d: {
        question: "Puissant et sûr de lui\n",
        groupe: 4
      }
    },
    {//7
      a: {
        question: "Ouvert et persuasif\n",
        groupe: 2
      },
      b: {
        question: "Appliqué et sélectif dans ses relations\n",
        groupe: 3
      },
      c: {
        question: "Ferme et entreprenant\n",
        groupe: 1
      },
      d: {
        question: "Posé et analytique\n",
        groupe: 4
      }
    },
    {//8
      a: {
        question: "Déterminé et résolu\n",
        groupe: 1
      },
      b: {
        question: "Avenant et jovial\n",
        groupe: 2
      },
      c: {
        question: "Sensible et amical\n",
        groupe: 3
      },
      d: {
        question: "Logique et correct\n",
        groupe: 4
      }
    },
    {//9
      a: {
        question: "Compatissant et diplomate\n",
        groupe: 3
      },
      b: {
        question: "Précis et mesuré\n",
        groupe: 4
      },
      c: {
        question: "Encourageant et ouvert aux idées\n",
        groupe: 2
      },
      d: {
        question: "Orienté résultat et rapide\n",
        groupe: 1
      }
    },
    {//10
      a: {
        question: "Responsable et ferme\n",
        groupe: 1
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 3
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 2
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 4
      }
    },


    //New 
    {//11
      a: {
        question: "Responsable et ferme\n",
        groupe: 2
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 3
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 3
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 4
      }
    },
    {//12
      a: {
        question: "Responsable et ferme\n",
        groupe: 4
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 2
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 1
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 3
      }
    },
    {//13
      a: {
        question: "Responsable et ferme\n",
        groupe: 3
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 2
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 4
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 1
      }
    },
    {//14
      a: {
        question: "Responsable et ferme\n",
        groupe: 1
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 4
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 2
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 3
      }
    },
    {//15
      a: {
        question: "Responsable et ferme\n",
        groupe: 4
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 2
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 3
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 1
      }
    },

    {//16
      a: {
        question: "Responsable et ferme\n",
        groupe: 2
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 1
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 4
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 3
      }
    },
    {//17
      a: {
        question: "Responsable et ferme\n",
        groupe: 3
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 4
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 1
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 2
      }
    },
    {//18
      a: {
        question: "Responsable et ferme\n",
        groupe: 2
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 3
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 4
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 1
      }
    },
    {//19
      a: {
        question: "Responsable et ferme\n",
        groupe: 4
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 1
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 2
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 3
      }
    },
    {//20
      a: {
        question: "Responsable et ferme\n",
        groupe: 1
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 2
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 4
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 3
      }
    },
    {//21
      a: {
        question: "Responsable et ferme\n",
        groupe: 4
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 3
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 1
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 2
      }
    },
    {//22
      a: {
        question: "Responsable et ferme\n",
        groupe: 1
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 3
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 4
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 2
      }
    },
    {//23
      a: {
        question: "Responsable et ferme\n",
        groupe: 2
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 1
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 3
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 4
      }
    },
    {//24
      a: {
        question: "Responsable et ferme\n",
        groupe: 3
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 1
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 4
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 2
      }
    },
    {//25
      a: {
        question: "Responsable et ferme\n",
        groupe: 4
      },
      b: {
        question: "Réservé et coopératif\n",
        groupe: 1
      },
      c: {
        question: "Expansif et imaginatif\n",
        groupe: 2
      },
      d: {
        question: "Méticuleux et minutieux\n",
        groupe: 3
      }
    }













  ]
  const [i, setI] = useState(0)

  const [choix, setChoix] = useState("")
  console.log(choix)


  const [g1, setG1] = useState(0)
  const [g2, setG2] = useState(0)
  const [g3, setG3] = useState(0)
  const [g4, setG4] = useState(0)




  const [aIseChecked, setAIseChecked] = useState(false)
  const [bIseChecked, setBIseChecked] = useState(false)
  const [cIseChecked, setCIseChecked] = useState(false)
  const [dIseChecked, setDIseChecked] = useState(false)


  useEffect(() => {
    // console.log(i)
  }, [i])

  function addGroupe(int) {
    if (int === 1) {
      setG1(g1 + 1)
    } else if (int === 2) {
      setG2(g2 + 1)
    } else if (int === 3) {
      setG3(g3 + 1)
    } else if (int === 4) {
      setG4(g4 + 1)
    }
  }

  return (
    <div>


      <div className="step-content">
        <div className="step">
          {
            i === 25 ?
              (<h3>Terminé!</h3>) :
              (<h3> {i}/25 </h3>)
          }

          {i <= questions.length - 1 ?

            (
              <div>

              </div>
            ) : (<div> </div>)
          }
          <progress value={i} max="10" />


        </div>
      </div>




      <div className="card">
        {i <= questions.length - 1 ?
          <div className="content" >

            <h2>Vous etre plutôt...</h2>

            <div className="group">
              <label htmlFor="a" className="radio">
                <input onChange={() => {
                  setChoix('a')
                  setAIseChecked(true)
                  setBIseChecked(false)
                  setCIseChecked(false)
                  setDIseChecked(false)
                }} checked={aIseChecked} type="radio" id="a" name="a" />
                <div className="radio--radio"></div>
                {questions[i].a.question}


              </label>
            </div>
            <div className="group">

              <label htmlFor="b" className="radio">
                <input checked={bIseChecked} onChange={() => {
                  setChoix('b')
                  setAIseChecked(false)
                  setBIseChecked(true)
                  setCIseChecked(false)
                  setDIseChecked(false)
                }} type="radio" id="b" name="b" />
                <div className="radio--radio"></div>

                {questions[i].b.question}

              </label>
            </div>


            <div className="group">
              <label htmlFor="c" className="radio">
                <input checked={cIseChecked} onChange={() => {
                  setChoix('c')
                  setAIseChecked(false)
                  setBIseChecked(false)
                  setCIseChecked(true)
                  setDIseChecked(false)
                }} type="radio" id="c" name="c" />
                <div className="radio--radio"></div>
                {questions[i].c.question}
              </label>
            </div>

            <div className="group">
              <label htmlFor="d" className="radio">
                <input checked={dIseChecked} onChange={() => {
                  setChoix('d')
                  setAIseChecked(false)
                  setBIseChecked(false)
                  setCIseChecked(false)
                  setDIseChecked(true)
                }} type="radio" id="d" name="d" value="d" />
                <div className="radio--radio"></div>
                {questions[i].d.question}
              </label>
            </div>
            {
              aIseChecked === true || bIseChecked === true || cIseChecked === true || dIseChecked === true ?
                <div className="btn-content">
                  <button className="btn-next" onClick={() => {

                    if (choix === "a") {
                      addGroupe(questions[i].a.groupe)
                    } else if (choix === "b") {
                      addGroupe(questions[i].b.groupe)
                    } else if (choix === "c") {
                      addGroupe(questions[i].c.groupe)
                    } else if (choix === "d") {
                      addGroupe(questions[i].d.groupe)
                    }
                    //console.log(`stap${i + 1} g1=>${g1}, g2=>${g2}, g3=>${g3}, g4=>${g4}`)
                    setI(i + 1)//passe au chois suivent
                    setAIseChecked(false)//reset les inputs
                    setBIseChecked(false)
                    setCIseChecked(false)
                    setDIseChecked(false)
                  }}></button>
                </div> : null
            }





          </div>

          : <End answers={
            [
              { groupe: "rouge", points: g1 },
              { groupe: "jaune", points: g2 },
              { groupe: "vert", points: g3 },
              { groupe: "blue", points: g4 }
            ]

          } />}

        {/* console.log("final g1=>" + g1, "g2=>" + g2, "g3=>" + g3, "g4=>" + g4)  */}
      </div>
    </div>
  );
}

export default App;
