import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-Ekzuqksofhlm0oCdAZ7GTguWdhNno08",
  authDomain: "course-online-130e7.firebaseapp.com",
  projectId: "course-online-130e7",
  storageBucket: "course-online-130e7.appspot.com",
  messagingSenderId: "455366834051",
  appId: "1:455366834051:web:0a9dca152d83471b9868b6",
  measurementId: "G-K69C3EVNQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

const loginWithFacebook = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
      console.log(result);
    })
  .catch((error) => {
      console.log(error);
    });
}

function App() {
  return (
    <>
    <button onClick={loginWithFacebook}>Login Facebook</button>
    </>
  )
}

export default App
