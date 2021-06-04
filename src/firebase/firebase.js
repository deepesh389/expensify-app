import firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses'). on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses);
// // });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })
// //     console.log(expenses);
// // });

// // database.ref('expenses').push({
// //     description: 'water',
// //     note: '',
// //     amount: '150',
// //     createdAt: '200000'
// // });

// // database.ref('expenses').push({
// //     description: 'recharge',
// //     note: '',
// //     amount: '599',
// //     createdAt: '222200'
// // });

// database.ref('expenses').push({
//     description: 'milk',
//     note: '29',
//     amount: '380',
//     createdAt: '3000'
// });

// // database.ref('notes').push({
// //     title: 'summer work',
// //     body: 'react, coding, intern'
// // });

// // const firebaseNotes = {
// //     notes: {
// //         aa: {
// //             title: 'First note!',
// //             body: 'This is my note'
// //         },
// //         bb: {
// //             title: 'second note!',
// //             body: 'This is my note'
// //         }
// //     }
// // };

// // const notes = [{
// //     id: '1',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id: '2',
// //     title: 'second note!',
// //     body: 'This is my note'
// // }];

// // database.ref('notes').set(notes);

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e)
// // });

// // setTimeout(() => {
// //     database.ref('age').set(24);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off();
// // }, 5000);

// // setTimeout(() => {
// //     database.ref('age').set(26);
// // }, 7000);

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetcing data', e);
// //     });

// // database.ref().set({
// //     name: 'Deepesh Kumar',
// //     age: 21,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Student',
// //         company: 'IIT-R'
// //     },
// //     location: {
// //         city: 'Roorkee',
// //         state: 'UK'
// //     }
// // }). then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// // database.ref('attributes').set({
// //     height: '156',
// //     weight: '62'
// // });

// // database.ref().update({
// //     stressLevel: '9',
// //     'job/company': 'IIT-K',
// //     'location/city': 'Kanpur'
// // });

// // database.ref('age').set(null);

// // database.ref().remove().then(() => {
// //     console.log('Data was removed');
// // }).catch((e) => {
// //     console.log('Did not remove data', e);
// // });