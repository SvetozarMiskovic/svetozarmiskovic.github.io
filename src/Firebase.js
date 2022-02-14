import { initializeApp,} from 'firebase/app'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDBf7YawwOAbl-Scyl2pjtGdy9HQ-n-tbQ",
    authDomain: "portfolio-1d730.firebaseapp.com",
    projectId: "portfolio-1d730",
    storageBucket: "portfolio-1d730.appspot.com",
    messagingSenderId: "879220502089",
    appId: "1:879220502089:web:dbaedaab4f76bc2b75d998",
    measurementId: "G-1G35VG0GQG"
  };

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)

export default firebaseApp