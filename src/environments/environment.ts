// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false,
  baseUrl: 'http://localhost:3000',
  authMode: AuthMode.CustomServer,
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
