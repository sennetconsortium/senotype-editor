import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import '@/lib/general'

function InputField({id, label, helpText, controlProps}) {
  const _id = id || label.toCamelCase()
  const helpBlockId = `${_id}HelpBlock`
  return (
    <div>
      <Form.Label htmlFor={_id}>{label}</Form.Label>
      <Form.Control
        aria-describedby={helpBlockId}
        {...controlProps}
      />
      <Form.Text id={helpBlockId} muted>
        {helpText}
      </Form.Text>
    </div>
  )
}

export default InputField