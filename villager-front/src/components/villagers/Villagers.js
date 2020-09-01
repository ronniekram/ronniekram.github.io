import React from 'react';
import { connect } from 'react-redux';
import { removeVillager } from '../../actions/villagerActions';
import remove from '../img/remove.png'

function Villagers({villagers, removeVillager}) {

    const list = villagers && villagers.map(villager =>
      <li key={villager.id}> 
        {villager.name} 
        <button onClick={() => removeVillager(villager.id)}> <img src={remove} alt="remove villager" /></button>
      </li> )
  
  return <> 
    {list} 
  </>
}

export default connect(null, {removeVillager})(Villagers);
// export default Villagers;
