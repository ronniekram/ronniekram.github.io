export function fetchIslands() {
  return (dispatch) => {
    dispatch({type: 'FETCH_ISLANDS'})
    fetch('https://ac-villager-api.herokuapp.com/islands')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'ISLANDS_FETCHED',
      islands: data
    })
    )
  }
}

export const addIsland = (data) => {
  return (dispatch) => {
    fetch('https://ac-villager-api.herokuapp.com/islands', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(island => dispatch({type: 'ADD_ISLAND', payload: island}))
  }
}

export const deleteIsland = (islandId) => {
  return (dispatch) => {
    return fetch(`https://ac-villager-api.herokuapp.com/islands/${islandId}`, {
      method: 'DELETE'
    })
    .then(island => dispatch({type: 'DELETE_ISLAND', payload: island}))
  }
}