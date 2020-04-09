// 用mockjs模拟生成数据
let Mock = require('mockjs');
// Mock.Random 是一个工具类，用于生成各种随机数据
let Random = Mock.Random;

// Mock.Random 中的方法与数据模板的 @占位符 一一对应，在需要时还可以为 Mock.Random 扩展方法，然后在数据模板中通过 @扩展方法 引用。例如：
Random.extend({
    constellation(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    },
    weekday(date) {
        var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return this.pick(weekdays);
    },
    sex(date) {
        var sexes = ['男', '女', '中性', '未知'];
        return this.pick(sexes);
    }
})

module.exports = () => {
    // 使用 Mock
    // 返回值会作为json-server的数据
    return Mock.mock({
        'users|10-30': [{
            'id|+1': 1,
            'age|18-24': 15,
            'gender|1': '@sex',
            'email': '@email',
            'phone': '@phone',
            'birthday': '@date(yy-mm-dd)',
            'constellations': '@constellation', // 使用自定义扩展随机星座
            'address': {
                'region': '@region',
                'province': '@province',
                'city': '@city',
                'city': '@city',
                'country': '@country'
            }
        }],
        'course|227': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1000,
            'course_name': '@ctitle(5,10)',
            'autor': '@cname',
            'college': '@ctitle(6)',
            'category_Id|1-6': 1
        }],
        'course_category|6': [{
            'id|+1': 1,
            'pid': -1,
            'cName': '@ctitle(4)'
        }],
        'sixcase': [
            { 'type': '盗窃类', 'sum': '@integer(10, 100)' },
            { 'type': '抢劫类', 'sum': '@integer(10, 100)' },
            { 'type': '诈骗类', 'sum': '@integer(10, 100)' },
            { 'type': '抢夺类', 'sum': '@integer(10, 100)' },
            { 'type': '涉黑恶类', 'sum': '@integer(10, 100)' },
            { 'type': '涉枪涉爆类', 'sum': '@integer(10, 100)' },
        ]
    });
};