import React from 'react';
import Main from "./components/Main";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./components/reducers";

// App Can act as the root of the application

// Initial state of app loads these current vars
let initialState = {

    // Object 'weatherApi' with properties 'isFetching', 'dataFetched', 'errorData'
    restaurantsApi: {
        isFetching: false,
        dataFetched: false,
        errorData: ""
    },

    // Finally we have an empty object called 'weatherData'
    restaurantsData: {

    }
};

let store = createStore(reducers, initialState, applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : undefined);


export default class App extends React.Component {

  render() {

    return (
        <Provider store={store}>
           < Main/>
        </Provider>

    );
  }
}


