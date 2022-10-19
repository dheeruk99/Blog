    
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyAJLO2riTfVPS8nEvahHBotteDu1zE4kfA",
        authDomain: "react-blog-14476.firebaseapp.com",
        projectId: "react-blog-14476",
        storageBucket: "react-blog-14476.appspot.com",
        messagingSenderId: "872368762622",
        appId: "1:872368762622:web:4d79b39645c6ad5f0a3faf"
    };

    firebase.initializeApp(firebaseConfig);

    export const firestore = firebase.firestore();