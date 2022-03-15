# Checklist Component

## Installing dependencies

After cloning the project, run `npm install` to install the dependencies.

## Running the app

To run the app, use `npm start`. The client app will run on `localhost:3000` by default.

## Generating test data set

`npm run dataset:generate` can be used to generate a new JSON dataset. By default, it will generate a JSON with 100 entries. To generate a specific number of entries, pass an argument like this: `npm run dataset:generate 200 # generate 200 entries`.

## Data structure and renderer function

You can replace the JSON and the corresponding renderer function to test the component.

The JSON file is located in `./src/assets/testDataset.json`, and the renderer function in `./src/renderer.tsx`.

You can also change the JSON generating script in `./src/scripts/generateDataset.js` to create JSONs with the desired structure.
