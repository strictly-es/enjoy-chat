import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCDJKsGlsHzH1u5fpZc4uQwAuVnZgYuxKY",
  authDomain: "react-slack-clone-be33a.firebaseapp.com",
  databaseURL: "https://react-slack-clone-be33a.firebaseio.com",
  projectId: "react-slack-clone-be33a",
  storageBucket: "react-slack-clone-be33a.appspot.com",
  messagingSenderId: "873445303766"
};
firebase.initializeApp(config);

export default firebase;
