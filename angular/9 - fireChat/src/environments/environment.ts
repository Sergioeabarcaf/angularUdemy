// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBv8BgutCiLtFx5QenIwCIlKAdkw2fF5rM",
    authDomain: "firechat-bcdbf.firebaseapp.com",
    databaseURL: "https://firechat-bcdbf.firebaseio.com",
    projectId: "firechat-bcdbf",
    storageBucket: "firechat-bcdbf.appspot.com",
    messagingSenderId: "178316480996"
  }
};
