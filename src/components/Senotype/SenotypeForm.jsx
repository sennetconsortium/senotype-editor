import EditContext from '@/context/EditContext';
import React, {useState, useContext, useEffect} from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import AppAccordion from '../layout/AppAccordion';
import InputField from '../form/InputField';

function SenotypeForm() {
  const [key, setKey] = useState('main');
  const {senotype} = useContext(EditContext)
  return (
    <>
      <h1 className='h2 mb-5'>{senotype ? 'Edit' : 'New'}</h1>
      <Tabs
        id="senotypeForm--Tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="main" title="Submission">
          <AppAccordion title={'Basic'}>
            <InputField label={'Name'} />
          </AppAccordion>
        </Tab>
        <Tab eventKey="metadata" title="Metadata">
          Tab content for Profile
        </Tab>
        <Tab eventKey="markers" title="Markers">
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  )
}

export default SenotypeForm