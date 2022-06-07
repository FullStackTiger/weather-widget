# Weather Widget React App for the forecast for today and the next 5 days 

## Project Details

- At the top we are showing the current status:
    - Temperature
    - Humidity
    - UVI
    - Wind direction (in text: for example NE, SW, E, etc) and wind speed in kmh
- The bottom part is the forecast for today and the next 5 days:
    - Week name
    - Weather icon
    - Max temp
    - Min temp
- Weather Data source:
    - https://api.openweathermap.org/data/2.5/onecall?lat=41.3888&lon=2.159&units=metric&appid=[api-key]
      (Free Api Key)
- Stacks:
    - React, Typescript, React Query, SCSS, OpenWeathermap Api, SVG Animation(Rain SVG Icon), React Testing Library, Jest
- Desgins:

     ![image](https://user-images.githubusercontent.com/35409129/172375096-1cf7380e-28dd-4feb-bf12-68a64dab7ca9.png)
     ![image](https://user-images.githubusercontent.com/35409129/172375205-538151fc-5a1a-46bb-ade3-3767c15cdec5.png)

    

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
