import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  firebase: {
    projectId: 'lemon-mart-cd9d6',
    appId: '1:1056202869839:web:23da10b23b6cb93fec6e3a',
    storageBucket: 'lemon-mart-cd9d6.appspot.com',
    apiKey: 'AIzaSyCg2GLVNgULJmtSgJZrb_xyYV1w7KnsbHU',
    authDomain: 'lemon-mart-cd9d6.firebaseapp.com',
    messagingSenderId: '1056202869839',
    measurementId: 'G-E16FTZBXJ9',
  },
  production: true,
  baseUrl: 'http://localhost:3000',
  authMode: AuthMode.CustomServer,
}
