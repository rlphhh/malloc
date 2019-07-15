import { getCurrentlySignedUser } from '../../../services/firebase'

const createAllocation = async (name, assignmentName, commitment, from, till, hours) => {
  try {
    const uid = getCurrentlySignedUser()
    if (uid) {
      const db = firebase.firestore()
      await db.collection('allocations').add({
        name, assignmentName, commitment, from, till, hours
      })
    } else {
      throw new Error('Having trouble accesing Firebase. Please try again...')
    }
  } catch (e) {
    console.error(e)
  }
}

export { createAllocation }
