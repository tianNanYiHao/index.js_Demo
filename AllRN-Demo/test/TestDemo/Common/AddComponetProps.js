/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-12-27 15:44
 * @Profile:  AddComponetProps
 * @Project:  test

 * @Description: 通过修改函数原型方式,为组件添加及修改全局属性样式
 *
 */




/**
 * 添加组件的的自定义属性
 * @param WrapComponent 需要修改的组件(View,Text,Image)
 * @param customProps 默认属性(View,Text等组件的默认属性,修改value值)
 */
export const addCustomProps = (WrapComponent, customProps) => {
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
