var firebaseConfig = {
  apiKey: 'AIzaSyBSLxdp6R8tWAJBVmtDHEXCcFNj8-yQfdQ',
  authDomain: 'skewkolkata.firebaseapp.com',
  databaseURL: 'https://skewkolkata.firebaseio.com',
  projectId: 'skewkolkata',
  storageBucket: 'skewkolkata.appspot.com',
  messagingSenderId: '331733718942',
  appId: '1:331733718942:web:b82635d456342b6914288f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let company = document.querySelector('#company').value;
  let name = document.querySelector('#name').value;
  let mobile = document.querySelector('#mobile').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;
  // let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(company, name, mobile, email, message);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(company, name, mobile, email, message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    company: company,
    name: name,
    mobile: mobile,
    email: email,
    message: message,
  });
  alert(`${name} Thank You! Your Form Has Been Submitted.`);
}
