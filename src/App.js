import { useState } from 'react'


const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
]



function App() {

  const [seachInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    const result = dictionary.find(item => item.word.toLowerCase() == seachInput.toLowerCase())

    if(result){
      setSearchResult(result.meaning)
    }
    else{
      setSearchResult("Word not found in the dictionary.")
    }

  }

  return (
    <div>
      <h1>Dictionary App</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={seachInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search for a word..." />
        <button type="submit">Search</button>
      </form>

      <p>Definition:</p>
      {searchResult != "" && <p>{searchResult}</p>}

    </div>
  );
}

export default App;
