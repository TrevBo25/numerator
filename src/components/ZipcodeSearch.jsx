import React from 'react';

const ZipcodeSearch = ({searchZipcode}) => {
  const [zipcode, setZipcode] = React.useState('');

  return (
    <>
      <input
        placeholder="Enter zipcode..."
        value={zipcode}
        onChange={e => setZipcode(e.target.value)}
      />
      <button onClick={() => searchZipcode(zipcode)}>Search!</button>
    </>
  )
}

export default ZipcodeSearch;
