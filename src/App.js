import React from 'react';
import axios from 'axios';

import './App.css';

import ZipcodeSearch from './components/ZipcodeSearch';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = React.useState([]);

  const searchZipcode = (zip) => {
    axios.get(`http://localhost:3001/?zipcode=${zip}`)
      .then(response => {
        response.data.results.forEach(result => {
          if (!window.localStorage.getItem(result.name)) {
            window.localStorage.setItem(result.name, JSON.stringify({visited: false}))
          }
        })
        setResults(response.data.results)
      })
      .catch(err => {
        alert("Not Found, please try another zip")
      })
  };
  
  return (
    <div className="App">
      <h1>Search a zipcode!</h1>
      <ZipcodeSearch searchZipcode={searchZipcode} />
      {results.length ? results.map(result => <Results result={result} key={result.place_id}/>) : null}
    </div>
  );
}

export default App;
