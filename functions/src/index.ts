import * as functions from 'firebase-functions/v1';
import * as admin from 'firebase-admin';
import axios from 'axios';
import { UserRecord } from 'firebase-admin/auth';

admin.initializeApp();

exports.syncUserDeletion = functions.auth.user().onDelete(async (user: UserRecord) => {
  const uid: string = user.uid;

  try {
  const response = await axios.delete(`http://localhost:5555/api/user/${uid}`);
  if (response.status !== 200) {
    console.error(`Unexpected response while deleting user ${uid}: ${response.data}`);
  }
} catch (error: any) {
  if (error.response) {
    // Server responded with a status code outside the range of 2xx
    console.error(`Backend error: ${error.response.data}`);
  } else {
    // Something else went wrong (e.g., network issue)
    console.error(`Failed to delete user ${uid} due to error: ${error.message}`);
  }
}

});
