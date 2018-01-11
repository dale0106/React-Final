import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {fetchRestaurants} from "./actions";
import { connect } from "react-redux";
class HeaderExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>The Big Restaurant List</Title>
                    </Body>
                </Header>
                <Button full onPress={this.props.getRestaurantsData}>
                    <Text> Load Nearby Restaurants... </Text>
                    </Button>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantsData: (e) => dispatch(fetchRestaurants())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderExample);