// Replace the config below with your own Firebase project config
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4qlKcnW8GLQnxQHQ7W89f6GZD8wyBKVM",
  authDomain: "todo-hackathon.firebaseapp.com",
  projectId: "todo-hackathon",
  storageBucket: "todo-hackathon.firebasestorage.app",
  messagingSenderId: "163934042243",
  appId: "1:163934042243:web:327dd22b6e99141f0d03b6",
  measurementId: "G-H7W4QR3KG4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();