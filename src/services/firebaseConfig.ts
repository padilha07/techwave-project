import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaheuk4_3Vo66VllkeaepILVged_rQN4",
  authDomain: "crud-react-firebase-6a4e8.firebaseapp.com",
  projectId: "crud-react-firebase-6a4e8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };

