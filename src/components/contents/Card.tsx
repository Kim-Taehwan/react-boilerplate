import React from 'react'

interface Props {
  title: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  image?: string
  alt?: string
  horizontal?: boolean
}

function Card({ title, description, image, alt, horizontal, footer }: Props) {
  return (
    <div className="card">
      {horizontal ? (
        <div className="row no-gutters">
          {image && (
            <div className="col-md-4">
              <img src={image} className="card-img" alt={alt || 'card image'} />
            </div>
          )}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              {footer && <p className="card-text">{footer}</p>}
            </div>
          </div>
        </div>
      ) : (
        <>
          {image && <img className="card-img-top" src={image} alt={alt || 'card image'} />}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="card-text mb-2">{description}</div>
            {footer}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
