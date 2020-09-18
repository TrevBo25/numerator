import React from 'react';

const Results = ({result}) => {
  const [checked, setChecked] = React.useState(
    JSON.parse(window.localStorage.getItem(result.name)).visited
  );

  const toggleChecked = () => {
    if (checked) {
      window.localStorage.setItem(result.name, JSON.stringify({visited: false}))
      setChecked(false)
    } else {
      window.localStorage.setItem(result.name, JSON.stringify({visited: true}))
      setChecked(true)
    }
  };

  return (
    <div className="result">
      <span className="result-content">
        <p>{result.name}</p>
        <input type="checkbox" checked={checked} onChange={() => toggleChecked()}/>
      </span>
    </div>
  )
 }

export default Results;
