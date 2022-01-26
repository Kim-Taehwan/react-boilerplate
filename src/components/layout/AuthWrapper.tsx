import React from 'react'
import './AuthWrapper.scss'

interface Props {
  children: React.ReactNode
}

function AuthWrapper({ children }: Props) {
  return (
    <div className="tbfe-auth">
      <div className=" d-flex flex-column align-items-center justify-content-center w-100 min-vh-100">
        <div className="tbfe-auth__logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="tbfe-auth__form">{children}</div>
      </div>
    </div>
  )
}

export default AuthWrapper
