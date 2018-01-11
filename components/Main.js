import React, {Component} from "react";
//import {Text, View} from 'react-native';
import {Text, View} from 'native-base';
import { Container } from 'native-base'


// Import Header
import HeaderExample from "./Header"
// Import Footer
import MyFooter from "./Footer"
// Import List of Restaurants
import RestoList from "./RestoList"
// Import Button
// Import List of restos


export default class Main extends Component {
    render() {
        return (

            <Container>
                <HeaderExample/>
                <RestoList/>
                <MyFooter/>
            </Container>

        );
    }
}

