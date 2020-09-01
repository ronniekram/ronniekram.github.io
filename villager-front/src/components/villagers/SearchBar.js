import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addVillager } from '../../actions/villagerActions';
import SearchResults from './SearchResults';

function SearchBar({villagers, island, addVillager}) {
  const [query, setQuery] = useState('')

  let results = villagers && villagers.filter(villager => villager.name.toLowerCase().includes(query.toLowerCase()))

  const displayResults = () => {
    if (query === '') {
      return ''
    } else {
      return <div className="column card"> <SearchResults results={results} island={island} addVillager={addVillager} /> </div>
    }
  }

  return (
    <div className="column card">
      <input type="text" 
        className="searchbar"
        placeholder="Search villager by name..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} />

        {displayResults()}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    villagers: state.villagerReducer.villagers
  }
}

export default connect(mapStateToProps,{addVillager})(SearchBar);
