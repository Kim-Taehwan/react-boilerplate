import React from 'react'
import BSAccordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

interface Props {
  defaultActiveIdx?: number
  list: {
    title: string
    description: React.ReactNode
  }[]
}

function Accordion({ defaultActiveIdx = -1, list }: Props) {
  return (
    <BSAccordion defaultActiveKey={defaultActiveIdx.toString()}>
      {list.map((content, idx) => (
        <Card key={content.title}>
          <BSAccordion.Toggle as={Card.Header} eventKey={idx.toString()} role="button">{content.title}</BSAccordion.Toggle>
          <BSAccordion.Collapse eventKey={idx.toString()}>
            <Card.Body>{content.description}</Card.Body>
          </BSAccordion.Collapse>
        </Card>
      ))}
    </BSAccordion>
  )
}

export default Accordion
