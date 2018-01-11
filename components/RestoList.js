import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
//import { connect } from "react-redux";
 export default class RestoList extends Component {
    render() {

        return(

            <Text> List of Restaurants </Text>

        )
        // if(this.props.isFetching){
        //     return (
        //         <Text> Loading... </Text>
        //     )
        // }
        // else if(this.props.errorData) {
        //     return (
        //         <div>
        //             <div>An error occurred:</div>
        //             <p>{this.props.errorData}</p>
        //         </div>
        //     );
        // }
        // else{
        //
        //     <Text> Restaurant List Goes Here </Text>
        //
        // }
    }
}

const mapStateToProps = (state) => {
    return {
        dataFetched: state.restaurantsApi.dataFetched,
        isFetching: state.restaurantsApi.isFetching,
        errorData: state.restaurantsApi.errorData
    };
};

//export default connect(mapStateToProps)(RestoList);