<template>
    <div style="margin: 10px">
        <VCountup :delay="500" :simplify="true" :unit="unit" :endVal="integratedEndVal" :mainStyle="mainStyle" :countStyle="countStyle">
            <span slot="leftText">原始数据:&nbsp;{{ integratedEndVal }}&nbsp;=>&nbsp;</span>
            <span slot="rightText">&nbsp;times</span>
        </VCountup>
        <VCountup :endVal="integratedEndVal" :mainStyle="mainStyle" :countStyle="countStyle">
            <span slot="leftText">原始数据:&nbsp;{{ integratedEndVal }}&nbsp;=>&nbsp;</span>
            <span slot="rightText">&nbsp;times</span>
        </VCountup>
    </div>
</template>
<script>
import VCountup from '../src/countup.vue';
// import VCountup from '../dist/v-countup';
export default {
    name: 'example',
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
    },
    components: {
        VCountup
    },
    mounted () {
        setInterval(() => this.integratedEndVal += parseInt(Math.random() * 20), 500);
    }
};
</script>
