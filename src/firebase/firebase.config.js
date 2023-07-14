// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYigCuho7M9odczvtLG7xGIWKXOY5nVlg",
  authDomain: "fir-news-dragan-project.firebaseapp.com",
  projectId: "fir-news-dragan-project",
  storageBucket: "fir-news-dragan-project.appspot.com",
  messagingSenderId: "346799900680",
  appId: "1:346799900680:web:594cbdd8664c7100a4e9bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;