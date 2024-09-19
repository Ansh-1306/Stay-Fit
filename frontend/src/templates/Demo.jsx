import React from 'react'
import { useLocation } from 'react-router-dom';

function Demo() {
    const bodypart = useLocation()
    const { id } = bodypart.state || ""

  return (
    <div>
      <h1>Next Page</h1>
      {id ? (
        <p>The ID passed from the previous page is: <strong>{id}</strong></p>
      ) : (
        <p>No ID passed from the previous page.</p>
      )}
    </div>
  )
}

export default Demo