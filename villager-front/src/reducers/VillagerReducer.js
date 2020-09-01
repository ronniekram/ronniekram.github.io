const villagerReducer = (state = { villagers: [], loading: false }, action) => {
  switch(action.type) {
    case 'FETCH_VILLAGERS':
      return {
        ...state,
        villagers: [...state.villagers],
        loading: true
      }
    case 'VILLAGERS_FETCHED':
      return {
        ...state,
        villagers: action.villagers,
        loading: false
      }
      case "ADD_VILLAGER":
        return {
           ...state,
           villagers: state.villagers.map(villager => {
              return villager.id == action.payload.id ? action.payload : villager
           })
        }
      case 'REMOVE_VILLAGER':
        return {
          ...state,
          villagers: state.villagers.map(villager => {
           return villager.id == action.payload.id && villager.island_id != action.payload.island_id ? action.payload : villager
        })
      }
    default:
      return state;
  }
}

export default villagerReducer;