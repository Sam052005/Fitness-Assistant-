// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl5-PKEGi8Td2ZY4lWLREn1SNfKwVLyW0",
    authDomain: "ai-fitness-trainer-8f288.firebaseapp.com",
    projectId: "ai-fitness-trainer-8f288",
    storageBucket: "ai-fitness-trainer-8f288.appspot.com",
    messagingSenderId: "48142028224",
    appId: "1:48142028224:web:8c97f1b0a2ac3e37cc0c25",
    measurementId: "G-26PHWYEMWB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the Auth instance
const auth = firebase.auth();

// FirebaseUI config for Google sign-in only
const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return true to redirect to the signInSuccessUrl.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Use popup for sign-in flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/', // URL to redirect to after a successful sign-in
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly' // Example scope
            ],
            customParameters: {
                prompt: 'select_account' // Forces account selection
            }
        }
    ],
    // Terms of service URL.
    tosUrl: '/terms-of-service',
    // Privacy policy URL.
    privacyPolicyUrl: '/privacy-policy'
};

// Initialize the FirebaseUI Widget using Firebase
const ui = new firebaseui.auth.AuthUI(auth);

// Start the FirebaseUI authentication
ui.start('#firebaseui-auth-container', uiConfig);
