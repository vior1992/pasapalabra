/*
 * action types
 */

export const SET_PLAYERNAME = 'SET_PLAYERNAME'


/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export const setPlayername = playername => {
  return { 
      type: SET_PLAYERNAME, 
      playername 
    }
}
