import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDrHlplpy5xAf_yPGreVtsJZuBTZgjTsy8",
  authDomain: "certus-sur-i43.firebaseapp.com",
  projectId: "certus-sur-i43",
  storageBucket: "certus-sur-i43.appspot.com",
  messagingSenderId: "14690433088",
  appId: "1:14690433088:web:163b6941a4e613548507a5",
  measurementId: "G-R23RJWGT8V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = registerForm['email'].value;
  const password = registerForm['password'].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('tienditaFelizUser', JSON.stringify(user));
      registerForm.reset();
      alert(localStorage.getItem('tienditaFelizUser'));
      window.location.href = '../';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`
        ${errorCode}
        ${errorMessage}`
      );
    });
});