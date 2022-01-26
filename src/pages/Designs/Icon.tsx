import React from 'react'
import Robopick from '@/components/systems/Robopick'

// https://fonts.google.com/icons?selected=Material+Icons
function Icon() {
  return (
    <div>
      <p className="font-weight-bold">
        <a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank" rel="noreferrer">
          ICON LINK
        </a>
      </p>
      <span className="material-icons">done</span>
      <span className="material-icons">search</span>
      <span className="material-icons">info</span>
      <span className="material-icons">home</span>
      <span className="material-icons">language</span>
      <span className="material-icons">logout</span>
      <span className="material-icons">favorite</span>
      <span className="material-icons">delete</span>
      <span className="material-icons">settings</span>
      <span className="material-icons">history</span>

      <hr />
      <Robopick />
    </div>
  )
}

export default Icon
