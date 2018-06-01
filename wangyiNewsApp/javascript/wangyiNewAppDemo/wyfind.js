import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class wyFind extends Component {

    constructor(Props) {
        super(Props);

        this.state = {

        }

    }

    render() {

        return (
            <View style={style.container} >
                <Text>发现</Text>
            </View>
        );

    }
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#980',
    }
});