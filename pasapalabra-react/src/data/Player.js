class Player {
    constructor({ id, name, correctAnswers, wrongAnswers, timeUsed }) {
        this.id = id || Date.now()+Math.floor(Math.random() * 100) + 1
        this.name = name || ''
        this.correctAnswers = correctAnswers || 0
        this.wrongAnswers = wrongAnswers || 0
        this.timeUsed = timeUsed || 0
    }
}

//For run the app, uncomment this:
export default Player

//For run the test, uncomment this:
// module.exports = Player