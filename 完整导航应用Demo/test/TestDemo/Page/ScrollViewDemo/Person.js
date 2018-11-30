/**
 *
 * @Author:   tiannanyihao
 * @Date:     2018-11-30 14:51
 * @Profile:  Person
 * @Project:  test

 * @Description:
 *
 */


function Person(name,age,sayHey){
    this.name = name;
    this.age = age;
    this.sayHey = ()=>{
        console.sh(this.name);
    }
}

export default Person