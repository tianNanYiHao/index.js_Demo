/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-03-22 09:08
 * @Profile:  PageTwo
 * @Project:  reduxEasyDemo

 * @Description:
 *
 */


import React, {PureComponent, Component} from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'

import * as testAction from '../Action/testAction'

class PageTwo extends Component {


    componentDidMount() {

    }

    render() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!! render ~~~~~~~~~~~~~~~~~~~~~~~~');
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>

                <View style={styles.showView}>
                    <Text>data.name</Text>
                    <Text>{this.props.data.name}</Text>
                </View>

                <View style={styles.showView}>
                    <Text>data.age</Text>
                    <Text>{this.props.data.age}</Text>
                </View>

                <View style={styles.showView}>
                    <Text>data.like.person1</Text>
                    <Text>{this.props.data.like[0].person}</Text>
                </View>

                <View style={styles.showView}>
                    <Text>data.like.today.am.home</Text>
                    <Text>{this.props.data.today.am.home}</Text>
                </View>
                <View style={styles.showView}>
                    <Text>data.like.today.pm.school</Text>
                    <Text>{this.props.data.today.pm.school}</Text>
                </View>




                <TouchableOpacity onPress={() => this.do1()}>
                    <View style={styles.itemView}>
                        <Text>dispatch(1)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.do2()}>
                    <View style={styles.itemView}>
                        <Text>dispatch(2)</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    do1() {
        this.props.dispatch(testAction.changeData1())
    }

    do2() {
        this.props.dispatch(testAction.changeDate2())
    }

}




const styles = StyleSheet.create({
    showView: {
        marginTop: 20,
        backgroundColor: '#c44333',
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemView: {
        marginTop: 20,
        backgroundColor: '#09f',
        width: 150,
        height: 39,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


/**************************************** 关联Redux ****************************************/

function mapStateToProps(state) {
    console.log("===+++++++++++++++++===");
    console.log(state.testReducer.data);
    return {
        data: state.testReducer.data,
        cd:state.testReducer.cd
    }
}
export default connect(mapStateToProps)(PageTwo)