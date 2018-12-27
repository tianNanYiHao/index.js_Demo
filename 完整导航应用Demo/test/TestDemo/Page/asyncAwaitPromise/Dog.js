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

export default Dog