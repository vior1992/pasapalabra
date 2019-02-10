//For run the app, uncomment this:
import _defaultData from './defaultData'
import playerConstructor from './Player'

//For run the test, uncomment this:
// const defaultData = require('./Book')
// const genreConstructor = require('./Genre')
// const _defaultData = require('./defaultData')

const Player = playerConstructor
const defaultData = _defaultData

//For run the app, uncomment this:
export default {
    Player,
    defaultData
}

// For run the test, uncomment this:
// module.exports = {
//     Player,
//     defaultData
// }