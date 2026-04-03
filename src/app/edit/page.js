'use client'
import FullLayout from '@/components/layout/FullLayout'
import Senotype from '@/components/Senotype/Senotype'
import { EditProvider } from '@/context/EditContext'


function page() {
  return (
    <EditProvider>
      <FullLayout>
        <Senotype />
      </FullLayout>
    </EditProvider>
  )
}

export default page