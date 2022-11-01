import ReactDOM from 'react-dom/client';
import App from './components/App';
import '../src/CSS.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZX7t_KcqgjoS7Lcphn97mRJyi-VL0fs4",
  authDomain: "web5-devoirfirebase.firebaseapp.com",
  projectId: "web5-devoirfirebase",
  storageBucket: "web5-devoirfirebase.appspot.com",
  messagingSenderId: "827534261382",
  appId: "1:827534261382:web:e2417474a7c6197630a507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);