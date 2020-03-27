var firebaseConfig = {
  apiKey: 'AIzaSyD12RzbsChfPXHFlUpMYP8i782nmwYK71U',
  authDomain: 'fir-6410a.firebaseapp.com',
  databaseURL: 'https://fir-6410a.firebaseio.com',
  projectId: 'fir-6410a',
  storageBucket: 'fir-6410a.appspot.com',
  messagingSenderId: '561239148822',
  appId: '1:561239148822:web:fadad10b6d1f553824e837'
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

let submit = document.querySelector('#submit');
let company = document.querySelector('#company');
let name = document.querySelector('#name');
let mobile = document.querySelector('#mobile');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

const db = firestore.collection('ContactData');

submit.addEventListener('click', function() {
  let companyInput = company.value;
  let nameInput = name.value;
  let mobileInput = mobile.value;
  let emailInput = email.value;
  let messageInput = message.value;

  db.doc()
    .set({
      company: companyInput,
      name: nameInput,
      mobile: mobileInput,
      email: emailInput,
      message: messageInput
    })
    .then(function() {
      alert('Submitted');
    });
});
