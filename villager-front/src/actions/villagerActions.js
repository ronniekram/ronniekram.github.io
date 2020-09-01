export function fetchVillagers() {
  return (dispatch) => {
    dispatch({type: 'FETCH_VILLAGERS'})
    fetch('hhttps://ac-villager-api.herokuapp.com/villagers')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'VILLAGERS_FETCHED',
      villagers: data
    })
    )
  }
}

export const addVillager = (villagerId, islandId) => {
  return (dispatch) => {
    fetch(`https://ac-villager-api.herokuapp.com/villagers/${villagerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        island_id: islandId
      })
    })
    .then(resp => resp.json())
    .then(villager => dispatch({
      type: 'ADD_VILLAGER', 
      payload: villager})
    )
  }
}

export const removeVillager = (villagerId) => {
  return (dispatch) => {
    fetch(`https://ac-villager-api.herokuapp.com/villagers/${villagerId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        island_id: ''
      })
    })
    .then(resp => resp.json())
    .then(villager => dispatch({type: 'REMOVE_VILLAGER', payload: villager}))
  }
}


