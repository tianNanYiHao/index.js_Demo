/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-26 11:11
 * @Profile:  Dog
 * @Project:  test

 * @Description:
 *
 */


class Dog {

    constructor(name, age, likeThing) {
        this.name = name
        this.age = age
        this.likeThing = likeThing
    }

    runEat = (info) => {
        console.log(info)
    }

}

var pig1 = ()=>{
    console.log('pig1 说, 我是一个小猪佩奇!')
}

const pig2 = 'pig2 哈哈哈哈哈';

const addCustomProps = (WrapComponent, customProps) => {
    const componentRender = WrapComponent.prototype.render;
    const componentDefaultProps = WrapComponent.prototype.constructor.defaultProps;
    WrapComponent.prototype.constructor.defaultProps = {
        ...componentDefaultProps,
        ...customProps
    };
    WrapComponent.prototype.render = function render() {
        let oldProps = this.props;
        this.props = {
            ...this.props,
            style: [customProps.style, oldProps.style]
        };
        return componentRender.apply(this)
    }
};


var mimi = 2
const nextTimeChangeString = (nowString='foo',nextString='bar')=>{
    console.log(nowString)
    setTimeout(()=>{
        console.log(nextString);
    },3000);
}

export {
    Dog,
    pig1 as pig1Say,
    pig2,

}
export {
    mimi as roubao,
    nextTimeChangeString,
}

export default Dog
