#neflix gpt

Create react app
configure tailwind css

website design
- for not logged in user - sign in page
-Browse space (logged in user)
    - Header
    -Main Movie with trialer in bg with play and description buttin
    - multiple movie lists(trending, action etc) - verticcally horizontal
    -movie suggestions

netflix gpt


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt3bWtqHHkUkXPInnO7UCF9rNx3JiBsio",
  authDomain: "netflixgpt-cd21a.firebaseapp.com",
  projectId: "netflixgpt-cd21a",
  storageBucket: "netflixgpt-cd21a.appspot.com",
  messagingSenderId: "453997598747",
  appId: "1:453997598747:web:5274d5d7912ee38d7000be",
  measurementId: "G-6GCMGCPXKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);