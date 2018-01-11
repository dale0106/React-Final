import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class MyFooter extends Component {
    render() {
        return (
            <Container>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>(c) Cris D'Alessio</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}