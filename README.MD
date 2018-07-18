# vue2 countup

vue 数字动画

### Installation

```
npm install v-countup --save
```

```
import VCountup from 'v-countup'

export default {
    name: 'example',
    components: {
        VCountup
    },
    data () {
        return {
            mainStyle: {
                fontSize: '30px'
            },
            countStyle: {
                fontSize: '50px',
                color: '#dc9387'
            },
            unit: [[1, '十多'], [2, '百多'], [3, '千多'], [4, '万多'], [5, '十万多'], [6, '百万多'], [7, '千万多'], [8, '亿多']],
            integratedEndVal: 3
        };
    }
}

<VCountup :delay="500" :simplify="true" :unit="unit" :endVal="integratedEndVal" :mainStyle="mainStyle" :countStyle="countStyle">
    <span slot="leftText">原始数据:&nbsp;{{ integratedEndVal }}&nbsp;=>&nbsp;</span>
    <span slot="rightText">&nbsp;times</span>
</VCountup>
```

## API

### Table Attributes

| 属性        | 说明                     | 类型    | 参数     | 默认值                                            |
| ----------- | ------------------------ | ------- | -------- | ------------------------------------------------- |
| main-class  | 样式名称                 | String  | -        | -                                                 |
| main-style  | 内联样式                 | Object  | -        | {fontSize: '16px', fontWeight: 500,color: 'gray'} |
| count-style | 数字显示内联样式         | Object  | -        | -                                                 |
| init-count  | 默认值                   | Number  | -        | 0                                                 |
| start-val   | 开始值                   | Number  | -        | 0                                                 |
| end-val     | 结束值                   | Number  | required | -                                                 |
| simplify    | 是否自定义格式或简化格式 | Boolean | -        | false                                             |
| duration    | 动画持续时间(秒)         | Number  | -        | 2                                                 |
| delay       | 动画延迟(毫秒)           | Number  | -        | 200                                               |
| uneasing    | 禁止动画                 | Boolean | -        | false                                             |
| ungroup     | 禁止分隔                 | Boolean | -        | false                                             |
| separator   | 数字分隔符               | String  | -        | ,                                                 |
| decimals    | 小数分隔符               | String  | -        | .                                                 |
| unit        | 自定义单位               | Array   | -        | [[3, 'K+'], [6, 'M+'], [9, 'B+']]                 |
