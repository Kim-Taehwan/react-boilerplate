import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
      <h1 className="text-primary" style={{ fontSize: '5rem' }}>
        4 0 4
      </h1>
      <h4 className="h4 text-secondary">OOPS! NOTING WAS FOUND</h4>
      <br />
      <Link to="/" className="text-primary">
        <u>RETURN TO MAIN</u>
      </Link>
    </div>
  )
}

export default NotFound
