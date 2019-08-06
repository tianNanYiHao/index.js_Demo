/**
 *
 * @Author:   tiannanyihao
 * @Date:     2019-08-02 13:26
 * @Profile:  PrettyLog
 * @Project:  sandbao

 * @Description:
 *
 */


export default class PrettyLog {

    static font_size = 13;
    static border_radius = 5;
    static bg_Color = '#DCDCDC';

    /**
     * 带样式的输出
     * @param log 输入的内容
     * @param color 颜色
     * @param fontSize 字体大小 默认 font_size
     * @param backgroundColor 背景色 默认
     * @param borderRadius 圆角 默认 border_radius
     */
    static cssLog = (log,
                     color,
                     fontSize = PrettyLog.font_size,
                     backgroundColor = 'transparent',
                     borderRadius = PrettyLog.border_radius) => {

        if (typeof(log) === 'string'){
            console.log('%c%s',
                    "color:" + color +
                    ";font-size:" + fontSize + "px" +
                    ";background-color:" + backgroundColor +
                    ';border-radius:' + borderRadius + "px",
                    log);
        }
        if (typeof(log) === 'object'){
            console.log('%c%o',
                    "color:" + color +
                    ";font-size:" + fontSize + "px" +
                    ";background-color:" + backgroundColor +
                    ';border-radius:' + borderRadius + "px",
                    log);
        }
    };

    /**
     * 纯颜色输出
     * @param log
     * @param color
     */
    static colorLog = (log, color) => {
        PrettyLog.cssLog(log, color);
    };

    /**
     * 带背景色的输出
     * @param log
     * @param color
     * @param bgColor
     */
    static colorWithBgLog = (log, color, bgColor) => {
        PrettyLog.cssLog(log, color, PrettyLog.font_size, bgColor);
    };


    /**************************************** 便捷方法 ****************************************/

    /**
     * 绿色日志(森林绿)
     * @param log
     * @param hasBg
     */
    static greenLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#228B22', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#228B22')
    };

    /**
     * 红色日志(猩红)
     * @param log
     * @param hasBg
     */
    static redLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#DC143C', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#DC143C')
    };

    /**
     * 粉红日志(苍白的紫罗兰红色)
     * @param log
     * @param hasBg
     */
    static pinkLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#DB7093', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#DB7093')
    };

    /**
     * 金色日志出入
     * @param log
     * @param hasBg
     */
    static yellowLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#FFD700', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#FFD700')
    }

    /**
     * 蓝色日志(道奇蓝)
     * @param log
     * @param hasBg
     */
    static blueLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#1E90FF', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#1E90FF')
    }

    /**
     * 蓝色日志(深紫罗兰色)
     * @param log
     * @param hasBg
     */
    static purpleLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#9400D3', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#9400D3')
    }

    /**
     * tube_id重试日志
     * @param log
     * @param hasBg
     */
    static reCreateTube_IDLog = (log, hasBg = false) => {
        hasBg ? PrettyLog.colorWithBgLog(log, '#00CED1', PrettyLog.bg_Color) : PrettyLog.colorLog(log, '#00CED1')
    }


}

