
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');


 firebase.initializeApp({
    apiKey: "AIzaSyCRTxb4ZXzZzqeQEmgN3oEK8BTyMvK69nE",
    authDomain: "sample-notification-6033b.firebaseapp.com",
    projectId: "sample-notification-6033b",
    storageBucket: "sample-notification-6033b.appspot.com",
    messagingSenderId: "364501570011",
    appId: "1:364501570011:web:26d75f8ef101286ba097fe"
 });

 const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

// //   self.registration.showNotification(notificationTitle,
// //     notificationOptions);
});