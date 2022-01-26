import React from 'react'
import './AppHeader.scss'
import { Link, useHistory } from 'react-router-dom'

interface Props {
  onToggleNav: () => void
}

function AppHeader({ onToggleNav }: Props) {
  const history = useHistory()

  function onSignout() {
    history.push('/login')
  }

  return (
    <nav className="tbfe-app-header navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 border-bottom">
      <div className="col-md-3 col-lg-2 mr-0 px-3 d-flex align-items-center w-100">
        <Link to="/" className="navbar-brand flex-fill">
          <img className="tbfe-app-header__logo" src="/symbol.png" alt="logo" />
          <span className="tbfe-app-header__text">{process.env.REACT_APP_NAME}</span>
        </Link>
        <div className="d-lg-none" onClick={onToggleNav} role="button" tabIndex={0}>
          <i className="material-icons">menu</i>
        </div>
      </div>

      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <span className="nav-link" onClick={onSignout} role="button">
            Sign out
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default AppHeader
