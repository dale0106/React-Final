
import axios from "axios";
import {Alert} from 'react-native';
// Create your actions
export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


// Create your action creators
// Action to retrieve restaurants
export function isFetching(state) {
    return {
        type: FETCH_RESTAURANTS,
        state: state
    };
}

// Action to run if weather is fetched successfully
export function restaurantsFetchSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        data: data
    };
}

// Action to run if the weather is unsuccesfully fetched
export function restaurantsFetchFailure(error) {
    return {
        type: FETCH_FAIL,
        error: error
    };
}

// Action Creator to actually gather the weather info passing the city the user has entered
// Will pass lat and long
export function fetchRestaurants() {

    // Thunk lets us use dispatch
    return (dispatch) => {
        // isFetching is true so now we will load the spinner until its false
        dispatch(isFetching(true));
        //Alert.alert('Btn Clicked');

        // Get the correct url link
        let url = "https://api.yelp.com/v3/businesses/search";
        // Get the API_KEY
        let API_KEY = "D4jgp9lMbdFV5uCfrTR5iJ5MqJkxuqxkqHhsrfuF0T8me3hvfQ7uKVqZ_Vp08vgdK4JiBcu-y13dvf_385m_OkI9eAbnnuS4Kc3L-gyO2wg_4Ryu2-KXQwMC3stWWnYx";

        // Aquire our unique api key
        let key = "c95951b6fec7e1a5b79aad4db8eaca2d";
        // Retrieve url being called. Passing the city and the unique key to retrieve info
        // This url call does work
        let myUrl = `http://api.openweathermap.org/data/2.5/weather?q=ottawa&APPID=${key}&units=metric`;

        // Authorization
        let yelp = axios.create({
            headers: {
                "Authorization": "Bearer " + API_KEY
            }
        });

        yelp.get(url)

            .then((response) => {
                if (response.status != 200) {

                    Alert.alert("There was an axios error");

                    throw Error(response.statusText);
                }
                dispatch(isFetching(false))
                return response;
            })
            .then((response) => {
                Alert.alert("Response received!!!!!")
                return response.data;
            })

            .then((data) => {

                return dispatch(restaurantsFetchSuccess(data));
            })

            .catch((e) => {

            dispatch(restaurantsFetchFailure(e));
            console.log(e);
            Alert.alert("There was an error :(");
            });



    }
}