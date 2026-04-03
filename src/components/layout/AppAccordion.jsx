import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AppAccordion({title, id, children}) {
  return (
    <div>
      <Accordion defaultActiveKey={id}>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default AppAccordion