import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './PageLoader.scss'

interface Props {
  active: boolean
}

function PageLoader({ active }: Props) {
  return active ? (
    <div className="tbfe-page-loader">
      <div className="tbfe-page-loader__content">
        <Spinner animation="border" role="status" />
        <h4 className="h4">Loading...</h4>
      </div>
    </div>
  ) : null
}

export default PageLoader
