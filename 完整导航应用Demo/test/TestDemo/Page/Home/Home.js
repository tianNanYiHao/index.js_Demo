/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-01 16:21
 * @Profile:  TeasetSelect
 * @Project:  test

 * @Description:
 *
 */

import React, {Component} from 'react'
import {
    Text,
    Platform,
    Image,
    View,
    AlertIOS,
    Button,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native'

import PropsTyps from 'prop-types'
import Dimensions from 'Dimensions'
import BaseComponent from "../BaseComponent/BaseComponent";
import {LFlatListDemo} from "../index";

export default class Home extends BaseComponent {


    constructor(props) {
      super(props);
      this.state = {

          data:[
              {title:'DeepHomeDemo'},
              {title:'TestDemo'},
              {title:'Teaset_Select'},
              {title:'FetchDemo'},
              {title:'AnimatedDemo'},
              {title:'FlatlistDemo'},
              {title:'ScrollViewDemo'},
              {title:'LRenderTest'},
          ]
      };
    }

    render() {
        return (

            <View style={styles.container}>
                {this.renderNoLeftItemNaivgationBar('Home页面')}
                <FlatList
                    style={styles.flatlist}
                    data={this.state.data}
                    renderItem={(item)=><CellView {...item} cellClick={()=>this.cellView(item.index)}/>}
                    ItemSeparatorComponent={()=> <View style={{backgroundColor:'#dddf00',height:5}}/>}
                    horizontal={false}
                    keyExtractor={(item,index)=>index}
                    columnWrapperStyle={{paddingHorizontal:5, flexWrap:'nowrap',alignItems:'center'}}
                    numColumns={3}
                />
            </View>

        )
    }


    /**************************************** 逻辑处理 ****************************************/

    cellView(tag){

        if (tag === 0) {
            this.push('LHome1')
        }

        if (tag === 1) {
            this.push('LTestDemo')
        }
        if (tag === 2) {
            this.push('LTeasetSelect')
        }
        if (tag === 3) {
            this.push('LFetchTest')
        }
        if (tag === 4) {
            this.push('LAnimatedDemo')
        }
        if (tag === 5) {
            this.push('LFlatListDemo')
        }
        if (tag === 6) {
            this.push('LScrollViewDemo')
        }
        if (tag === 7) {
            this.push('LRenderTest')
        }
    }

}

const styles = StyleSheet.create({

    container:{

    },
    flatlist:{
        alignSelf:'center',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height-100,

    },

    text: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#889',
        borderWidth: 1,
        borderColor: '#090',

    },
    cellViewContainer:{
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#0f0',
        borderColor:'#088eff',
        borderWidth:1,
        borderRadius:20,
        width: (Dimensions.get('window').width - 20 - 40)/3
    },
    cellViewText:{

        fontSize:20,
        textAlign:'center',
    },

})


/**************************************** CellView ****************************************/
class CellView extends Component{

    static propTypes={
        cellClick:PropsTyps.func.isRequired,
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.cellClick(this.props.item.index)}>
                <View style={styles.cellViewContainer}>
                    <Text style={styles.cellViewText} >{this.props.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}