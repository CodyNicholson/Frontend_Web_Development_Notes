# Setting Up Jasmine

To install jasmine type this command into the Node.js command prompt while in the project directory:

```
npm install jasmine --save-dev
```

To test angular we also need to install angular-mocks:

```
npm install angular-mocks --save-dev
```

Then we need to bring in the TypeScript typings for jasmine (If you don't have typings, google how to install it):

```
typings install dt~jasmine --global --save-dev
```

Since we are using angular we also need the typings for angular mocks:

```
typings install dt~angular-mocks --global --save-dev
```

Next, download Visual Studio Code because it supports TypeScript well: https://code.visualstudio.com/

Last, follow the tutorial to configure Transpiling TypeScript into JavaScript: https://code.visualstudio.com/docs/languages/typescript
