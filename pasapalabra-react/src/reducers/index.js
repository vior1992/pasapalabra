// import { combineReducers } from 'redux'

import {
  SET_PLAYERNAME,
} from '../actions'

export default function playername(state = [], action) {
  switch (action.type) {
    case SET_PLAYERNAME:
      return [
        state,
      ]
    default:
      return state
  }
}

// const reducers = combineReducers({
//   playername,
// })

// export default reducers