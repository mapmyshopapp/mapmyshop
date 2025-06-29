// firebase-config.js
const firebaseConfig = {
     apiKey: "AIzaSyCARcKfPg1_muQw4Ekar5fGeZH1OG367L0",
          authDomain: "bmapmyshop.firebaseapp.com",
          projectId: "bmapmyshop",
          storageBucket: "bmapmyshop.appspot.com",
          messagingSenderId: "2847357578",
          appId: "1:2847357578:web:3e245fd3af1d7fbb3e8b73",
          measurementId: "G-QGHNK7GLLX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
