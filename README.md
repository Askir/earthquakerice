This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

And is deployed via github pages at https://askir.github.io/earthquakerice.

## Features

The application shows a map of all earthquakes in the last 24 hours. The data is loaded via the API from https://earthquake.usgs.gov/ and displayed on a custom google map. Eartquakes with a higher magnitude are displayed with larger circles on the map.

In addition all earthquakes are also listed below the map with exact magnitude, location and time of occurence.


If you want to check the code out run: `git clone https://github.com/Askir/earthquakerice.git`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
**Note: This project is currently partially untested as React testing seems to have some intricacies. And I didn't have the time to get into it yet.**

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.