import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class wyMine extends Component {

    constructor(Props) {
        super(Props);

        this.state = {

        }

    }

    render() {

        return (
            <View style={style.container} >
                <Text>我的</Text>
            </View>
        );

    }
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#001442',
    }

});