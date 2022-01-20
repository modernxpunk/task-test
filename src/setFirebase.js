import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAh0WvJ5ypYuyumMHb6hvbAdc9-ivYb-l8",
  authDomain: "lampa-test-task-791da.firebaseapp.com",
  projectId: "lampa-test-task-791da",
  storageBucket: "lampa-test-task-791da.appspot.com",
  messagingSenderId: "614347066341",
  appId: "1:614347066341:web:b125576c1082d7a449bd0c",
  databaseURL: "https://lampa-test-task-791da-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export default firebase