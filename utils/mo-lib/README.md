### 引入

```
npm i mo-lib

import MoLib from 'mo-lib' 

or 

import { getTree } from 'mo-lib'
```

### API
> setRepeatObj({arr, repeatKey='area', majorKey='name'})

将数组重复元素归类组装成树形结构

```
@param {Array} arr  需要组装的数据
@param {String} repeatKey 重复元素的key 
@param {String} majorKey 归类到重复元素的key
@return 树形结构

```

> getLetter

生成26个字母

> getDaysInOneMonth({year, month})

获取某月份的天数

```
@param {String} year
@param {String} month
```

> arrRemove({ arr, ele, key })

数组删除元素 返回删除元素的数组
```
@params {Array} arr原数组
@params {String} ele 元素
@params {String} key 对象key
```

> timestampFormat(dateTimeStamp)

时间转换成 刚刚，几分钟前

```
@params {String} dateTimeStamp 时间戳
```

> getTree(treeArray, config)

扁平数据转换成树结构

```
 @param {Array} treeArray
```