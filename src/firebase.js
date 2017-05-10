import firebase from 'firebase'

const config = {
  apiKey: '?AIzaSyA3meRFVYAC6IrTL2NrnvRDtUzKM3mwHgw',
  authDomain: 'who-here.firebaseapp.com',
  databaseURL: 'https://who-here.firebaseio.com',
  projectId: 'who-here',
  storageBucket: 'who-here.appspot.com',
  messagingSenderId: '106259865922'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
