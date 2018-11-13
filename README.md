This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Team Shopping project

### Requirements:
`Node 8.12.0 LTS`

## Download packages
First download dependencies running: 
`yarn && cd server && yarn & cd ..`

## Run project:
First we run our service:
`yarn start:server`
Then we run in another console:
`yarn start or npm start`

## Project Structure:

```
.
|-- package.json
|-- yarn.lock
|-- .babelrc
|-- public
    |-- index.html
    |-- favicon.ico
    |-- manifest.json
|-- server
    |-- index.js
    |-- package.json
    |-- yarn.lock
    |-- data
        |-- index.js
|-- src
    |-- index.js
    |-- index.css
    |-- serviceWorker.js
    |-- Assets
        |-- logo.svg
    |-- Components
        |-- [components-name].js
        |-- Styles
            |-- [components-name-styles].js
        |-- Specs
            |-- [components-name-specs].js
    |-- Config
    |-- Containers
        |-- [containers-name].js
        |-- Styles
            |-- [containers-name-styles].js
        |-- Specs
            |-- [containers-name-specs].js
    |-- Data
        |-- index.js
    |-- Lib
        |-- utils.js
    |-- Redux
        |-- Reducers
        CreateStore.js
        index.js
    |-- Sagas
        |-- index.js
        |-- [sagas-funtionality].js
    |-- Services
        |-- Modules
            |-- [services-functionality].js
        |-- api.js
    |-- Themes
```


TODO: Missing handling Forms. Probably will use [Redux Form](https://redux-form.com/)
