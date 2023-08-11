import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCRTxb4ZXzZzqeQEmgN3oEK8BTyMvK69nE",
  authDomain: "sample-notification-6033b.firebaseapp.com",
  projectId: "sample-notification-6033b",
  storageBucket: "sample-notification-6033b.appspot.com",
  messagingSenderId: "364501570011",
  appId: "1:364501570011:web:26d75f8ef101286ba097fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)

export default messaging