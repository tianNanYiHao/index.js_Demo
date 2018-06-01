import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    WebView
} from 'react-native';

export default class wyNewsDetail extends Component {

    //state
    constructor(Props) {
        super(Props)
        this.state = {
            detailURl: ''
        }
    }

    render() {
        return (
            <WebView
                ref={'webView'}
                automaticallyAdjustContentInsets={false}
                style={style.webView}
                source={{ uri: this.props.data.link }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={true}
            />
        );
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1
    },
    webView: {
        flex: 1
    }

})