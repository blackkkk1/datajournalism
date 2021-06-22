var myChart = echarts.init(document.getElementById('prison_term'));
var prison_term_option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['杀子案判决结果', '杀夫案判决结果'],
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#bfbfbf'
            }
        },
        data: ['免除刑罚', '1年及以下', '1-3年', '3-10年', '10年及以上', '无期徒刑', '死刑缓刑', '死刑']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            lineStyle: {
                color: '#bfbfbf'
            }
        }
    },
    series: [
        {
            name: '杀子案判决结果',
            itemStyle: {
                normal: {
                    color: '#fecd00',
                    lineStyle: {
                        color: '#fecd00'
                    }
                }
            },
            type: 'line',
            data: [1.0, 1.9, 31.9, 34.6, 22.2, 7.1, 1.0, 0.4],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' }
                ]
            },
        },

        {
            name: '杀夫案判决结果',
            itemStyle: {
                normal: {
                    color: '#d15028', //改变折线点的颜色
                    lineStyle: {
                        color: '#d15028' //改变折线颜色
                    }
                }
            },
            type: 'line',
            data: [0.7, 2.0, 20.7, 23.2, 30.0, 16.0, 6.7, 0.5],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' }
                ]
            }
        }
    ]
};
myChart.setOption(prison_term_option);