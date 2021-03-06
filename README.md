# Typescript & React state R&D

## Goals

This project is a playground for experimenting with all things state management with the purpose of finding good workflows, either by using existing tools and libraries or developing new ones.

This project also aims to produce example code for as many state management scenarios as possible (ie. local vs remote state, in-memory vs persisted state, etc.) for a wide range of application complexities (ie. small, medium or large scale applications).

I'm approaching this project in two stages: First custom code, then 3rd party code. Meaning I will build all apps without using 3rd party state management libraries in an attempt to find new workflows and maybe build some useful libraries. However, I'm not trying to replace any community standard state management libraries. At the end of the project I will refactor the apps to use ie. redux, and compare and see what I had missed or if I managed to invent something useful.

> Note that this is primarily a project for myself to practice state management with.

## The app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

When you run `yarn start` you will launch a react application with examples demonstrating the state management scenarios mentioned above.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the react application in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-api`

Runs the api servers required for some of the react examples.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
