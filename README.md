# State and Form data separation - independent interpretation

This code follows a [post](https://medium.com/anyjunk/our-react-redux-structure-17bb3ed41488) by [Dan Hood](https://medium.com/@danahood) on separating the state of an app from any potential form data that is to be extracted from the state

## Getting Started

### Prerequisites

The code is written and tested for node **v11.0.0**
Clone this repository and go to it's root

### Installing

```
npm install
```

### Running the project

```
npm start
```

## How to read this repo

The base code can be found in the ```/src``` folder.
Comments on the particular text of the post will be put in comments initially, and later on summarized in a dedicated readme

## Useful

Initial version scaffold taken from the [tutorials](https://reactjs.org/docs/create-a-new-react-app.html) by running
```npx create-react-app react-state-form```

Inspiration taken from [the react shopping cart example](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart)

## Notes

TS and Flow fight each other. Had to disable [TS / JS lang features](https://stackoverflow.com/questions/48859169/js-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-check)

Installed [flow](https://create-react-app.dev/docs/adding-flow/)

Downgraded from Node **v13.0.0** after the build stopped working due to an eslint regex inside node_modules containing invalid flags 