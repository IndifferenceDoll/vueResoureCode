/*@flow*/
//上面这个标识必须存在，否则flow将不检测本文件
//想忽略某些文件的检测，就在flowconfig里面的[ignore]下添加，例如：.*/node_modules/.*
//某些第三方引入的包含很多自定义类的库，应该将文件夹名写在flowconfig里面的[libs]下，
//例如vue源码将自定义的类写在一个flow名的文件夹下，阅读源码时可以到其中找到某些自定义类的类型定义

//npm install -g flow-bin //安装flow
//npm install babel-preset-flow --save-dev //使babel支持flow
//npm install eslint-plugin-flowtype --save-dev //使eslint支持flow
//.eslintrc中extends加入"plugin:flowtype/recommended"和 plugins中加入"flowtype"
//flow init //初始化flow配置文件
//flow stop //停止flow


// function split(str){
//     return str.split(' ')
// }
// split(11)

// function add(x:number,y:number):number{
//     return x+y
// }
// add('hellow',11)

// var arr:Array<number> = [1,2,3]
// arr.push('test')

// class Bar{
//     x:string;//对应的是this.x
//     y:string | number;//对应的是this.y，｜表示或
//     z:?boolean;//对应的是this.z,?表示可以为null或者undefined,或者也可以改为 | void
//     constructor(x:string,y:string | number,z:?boolean){//这里是型参，对应的是下面的值x，y，z
//         this.x = x
//         this.y = y
//         this.z = z
//     }
// }
// var bar:Bar = new Bar('test',11)

// var obj:{a:number, b:string, c:Array<number>, d:Bar}={
//     a:11,
//     b:'text',
//     c:[1,2,3],
//     d:new Bar('test',11,false)
// }
//[ts]怎么去掉？
//git init//本地文件与git建立链接
//git commit －m 'xxx' //提交修改到本地仓库
//git remote add origin https://。。。。 //远程某地址添加设置为源
//git push －u origin master //将本地仓库修改添加到源仓库的master分支
//git branch xxx //添加名为xxx的分支
//git checkout xxx //将当前分支切换到xxx分支
//git add . //将当前新建文件及修改添加到本地仓库中
//git status //查看当前文件状态