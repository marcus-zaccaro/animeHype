// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ANIME_BASE_PATH: 'https://kitsu.io/api/edge',
  firebaseConfig: {
    apiKey: 'AIzaSyCjOh28r9WGDHW4RKmWZfbbjy_vMFx3Itk',
    authDomain: 'animehype-86be0.firebaseapp.com',
    databaseURL: 'https://animehype-86be0.firebaseio.com',
    projectId: 'animehype-86be0',
    storageBucket: 'animehype-86be0.appspot.com',
    messagingSenderId: '457039686918',
    appId: '1:457039686918:web:8b81590b725455ca3f0287'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
