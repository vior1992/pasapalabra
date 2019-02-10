//For run the app, uncomment this:
import Data from '../data'
//import validateLogic from "../utilities/validate"

//For run the test, uncomment this:
// const Data = require("../data")
// const validateLogic = require("../utilities/validate")

const { defaultData, Player } = Data
const { players, questions } = defaultData

const playerStorage = {
    _key: "players",
    _storage: sessionStorage,
  
    init: players =>
      playerStorage._storage.setItem(playerStorage._key, JSON.stringify(players)),
  
    get: () =>
      new Promise(resolve => {
        setTimeout(() => {
            resolve(
                JSON.parse(playerStorage._storage.getItem(
                    playerStorage._key)
                )
            )
        }, Math.floor(Math.random() * 300) + 50)
      }),
  
    set: players =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(
            playerStorage._storage.setItem(
              playerStorage._key,
              JSON.stringify(players)
            )
          )
        }, Math.floor(Math.random() * 300) + 50)
    })
}

playerStorage.init(players)

const logic = {
    /**
     *
     * @returns {Promise.<Array>} -> The books array.
     */
    retrievePlayers: async () => await this.playerStorage.get(),

    /**
     *
     * @returns {} -> TODO
     */
    newPlayer(playerName) {
        //validateLogic([{ key: "player", value: player, type: String }])
        
        return (async () => {
            const players = logic.retrievePlayers()
            const newPlayer = new Player({ playerName })

            players.push(newPlayer)

            await this.playerStorage.set(players)
        })()
    },

    retrieveQuestions: () => questions,
    
    answerChecker(letter, answer) {
        // validateLogic([
        //     { key: "question", value: question, type: String },
        //     { key: "answer", value: genre, type: String },
        //   ])

        return (async () => {
            questions.map(question => {
                question.find(question.letter = letter) 

                if (question.answer === answer) question.status = 1
                else if (question.answer === 'pasapalabra' || '') question.status = 0
                else if (question.answer === answer) question.status = 1
            })
        })()
    }
}

//For run the app, uncomment this:
export default logic

//For run the test, uncomment this:
// module.exports = logic