<!--
 * @Description:json介绍
 * @Author: xiao.zhang
 * @Date: 2021-04-14 19:54:37
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-04-19 11:09:21
-->

### JSON

##### 概念：JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式，采用完全独立于语言的文本格式，是理想的数据交换格式。同时，JSON 是 JavaScript 原生格式，这意味着在 JavaScript 中处理 JSON 数据不须要任何特殊的 API 或工具包。

##### 1.在 JSON 中有两种结构：对象和数组

- 对象

```
    var o = {"name":"tom", "age":18,"num":17521029253}
```

- 数组

```
  var jsonranklist=[{"name":"tom", "age":18,"num":17521029253},{"name":"marri", "age":19,"num":17521029253}]
```

##### 2. 在数据传输流程中，json 是以文本，即字符串的形式传递的，而 JS 操作的是 JSON 对象，所以，JSON 对象和 JSON 字符串之间的相互转换是关键。

- JSON 字符串

```
var jsonStr = '{"name":"Liza", "password":"123"}'
```

- JSON 对象

```
var jsonObj = {"name":"Liza", "password":"123"}
```

- JSON 字符串转为 JSON 对象

```
var jsonObj = JSON.parse(jsonStr)
```

- JSON 对象转为 JSON 字符串

```
var jsonStr = JSON.stringify(jsonObj)
```

##### 3.JSON 字符串的替换

工作中经常遇到这样的字符串，如下：

![Image text](https://img-blog.csdn.net/20161028115308822)

需要经过替换后，才能从字符串转为 JSON 对象。这里我们需要使用 replaceAll 功能，将所有的‘ \\" ’替换成""

代码如下：

```
var jsonStr=jsonStr.replace(new RegExp('\\"',"gm"), '"' )
```

替换后的效果如下：

![Image text](https://img-blog.csdn.net/20161028115312432)

##### 4.遍历 JSON 对象和 JSON 数组

- 遍历 JSON 对象代码如下

```
var packJson  = {"name":"Liza", "password":"123"} ;

for(var k in packJson ){ //遍历packJson 对象的每个key/value对,k为key
   alert(k + " " + packJson[k]);
}
```

- 遍历 JSON 数组代码如下：

```
var packJson = [{"name":"Liza", "password":"123"}, {"name":"Mike", "password":"456"}]

for(var i in packJson){ //遍历packJson 数组时，i为索引
   alert(packJson[i].name + " " + packJson[i].password);
}

```

##### 递归遍历

- 例子 1：遍历 JSON 对象，遇到数组的时候，数组中有超过一个对象，删除第一个对象之后的所有对象

![Image text](https://img-blog.csdn.net/20161028115320046)

期望处理后的 JSON 如下：
![Image text](https://img-blog.csdn.net/20161028115324375)

递归代码如下：

```
   // 梳理
      function handleData(obj) {
        if (obj instanceof Array) {
          if (obj.length > 1) {
            obj.splice(1, obj.length - 1);
          }
          handleData(obj[0]);
        } else if (obj instanceof Object) {
          for (var index in obj) {
            var jsonValue = obj[index];
            handleData(jsonValue);
          }
        }
      }

      function jsonParse() {
        // 调用
        handleData(jsonObj);
        var last = JSON.stringify(jsonObj, undefined, 2);
        return last;
      }
```

- 例子 2：JSON 对象递归查找目标节点（该节点是唯一的），找到后把 targetChildren 赋值给节点的 children

![Image text](https://img-blog.csdn.net/20161028115329119)

targetChildren 为
![Image text](https://img-blog.csdn.net/20161028115334578)

期望最后处理的 JSON 结果为：
![Image text](https://img-blog.csdn.net/20161028115338995)

说明 id === target 的这个对象，没有 children 这个属性

```

function findTarget(obj,targetId,targetChildren){
    if(obj.id===targetId){
          obj.children=targetChildren;
          return true;
    }else{
          if(obj.children!=null){
               for(var i=0; i<obj.children.length; i++){
                    var flag=findTarget(obj.children[i],targetId,targetChildren);
                    if(flag===true){
                          return true;
                    }
               }
          }
    }
    return false;
}

```
