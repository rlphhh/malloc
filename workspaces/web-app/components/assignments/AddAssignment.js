import React, { useState } from 'react'
import { AssignmentDialog } from './AssignmentDialog'

import { createAssignment } from './db'

const AddAssignment = () => {
  const [ open, setOpen ] = useState(false)

  return (
    <AssignmentDialog open={open}
      buttonText='Add assignment...'
      buttonStyling={{ secondary: true, color: 'black' }}
      onOpen={() => setOpen(true)}
      onDone={async (assignmentName, assignmentNumber) => {
        setOpen(false)
        await createAssignment(assignmentName, assignmentNumber)
      }}
      onCancel={() => setOpen(false)} />
  )
}

export { AddAssignment }