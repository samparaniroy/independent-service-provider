// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRw4ZHqKNBSlJ4TFQHPsGwgNyhbD0qxzI",
  authDomain: "independent-service-prov-25ebf.firebaseapp.com",
  projectId: "independent-service-prov-25ebf",
  storageBucket: "independent-service-prov-25ebf.appspot.com",
  messagingSenderId: "858686039804",
  appId: "1:858686039804:web:81d40737a5b51df364d979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;