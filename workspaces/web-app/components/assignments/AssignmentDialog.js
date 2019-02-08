import React from 'react'

import { Dialog } from '../dialogs'
import { AssignmentDialogContent } from './AssignmentDialogContent'

const AssignmentDialog = ({
  buttonStyling,
  buttonDisabled,
  buttonText,
  open,
  onOpen = () => {},
  onDone = () => {},
  onCancel = () => {}
}) => (
  <Dialog buttonStyling={buttonStyling}
    buttonText={buttonText}
    open={open}
    onOpen={onOpen}
    onDone={onDone}
    onCancel={onCancel}>
    <AssignmentDialogContent onDone={onDone} buttonStyling={buttonStyling} />
  </Dialog>
)
export { AssignmentDialog }
