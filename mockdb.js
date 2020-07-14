// 用mockjs模拟生成数据
let Mock = require('mockjs');
// Mock.Random 是一个工具类，用于生成各种随机数据
let Random = Mock.Random;

module.exports = () => {
    // 使用 Mock
    // 返回值会作为json-server的数据
    return Mock.mock({
        'list|1-100': [{
            'id|+1': 1,
            'isBoolean': '@boolean(10, 0, true)', //百分之百的true
            'naturalNumber': '@natural(1, 1000)', //大于等于零的整数
            'integer': '@integer(0)', //随机整数
            'float': '@float(1, 100, 3, 6)', //随机浮点数, 
            'character': '@character("upper")', //一个随机字符
            'string': '@string("lower", 5, 20)', //一串随机字符串
            'range': '@range(1, 10, 2)', //一个整形数组，步长为2
        }],
        'dateList|10': [{
            'date': '@date',
            'date-yyyy-MM-dd': '@date(yyyy-MM-dd)',
            'date-yy-MM-dd': '@date(yy-MM-dd)',
            'date-y-MM-dd': '@date(y-MM-dd)',
            'date-y-M-d': '@date(y-M-d)',
            'line-through': '------------------------------------------------',
            'timessss': '@time', //随机的时间字符串,
            'time-format': '@time()', //指示生成的时间字符串的格式, default: 'HH: mm: ss',
            'time-format-1': '@time("A HH:mm:ss")',
            'time-format-2': '@time("a HH:mm:ss")',
            'time-format-3': '@time("HH:mm:ss")',
            'time-format-4': '@time("H:m:s")',
            'datetime': '@datetime("yyyy-MM-dd A HH:mm:ss")', //返回一个随机的日期和时间字符串
            'dateNow': '@now("second")' //获取当前完整时间
        }],
        'imageList|5': [{
            'id|+1': 1,
            'img': '@image', //生成一个随机的图片地址,
            'img-1': '@image("200x100", "#000", "#fff", "png", "Mock.js")', //生成一个200*100, 背景色#000，前景色#fff, 格式png, 文字mock.js的图片
        }],
        'paragraphList|5': [{
            'id|+1': 1,
            'paragraph1': '@cparagraph(2)', //生成一段2句话的中文文本,
            'paragraph2': '@paragraph(3)', //生成一个3句话的英文文本
            'title': '@title', //随机生成一个英文标题
            'ctitle': '@ctitle', //随机生成一个中文标题
        }],
        'nameList|5': [{
            'id|+1': 1,
            'name': '@name', //英文名,
            'cname': '@cname', //中文名
        }],
        'webList|5': [{
            'id|+1': 0,
            'url': '@url("http", "baidu.com")', //url: http://www.baidu.com
            'protocol': '@protocol', //随机生成一个url协议
            'domain': '@domain', //随机生成一个域名,
            'email': '@email', //随机生成一个邮箱地址,
            'ip': '@ip' //随机生成一个ip地址
        }],
        'addressList|5': [{
            'id|+1': 1,
            'region': '@region', //生成一个大区
            'province': '@province', //生成一个省份
            'city': '@city', //生成一个市
            'country': '@country', //一个县
            'zip': '@zip', //邮政编码
        }],
        'rd': {
            'Boolean': Random.boolean, // 可以生成基本数据类型
            'Natural': Random.natural(1, 10), // 生成1到100之间自然数
            'Integer': Random.integer(1, 100), // 生成1到100之间的整数
            'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
            'Character': Random.character(), // 生成随机字符串,可加参数定义规则
            'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
            'Range': Random.range(0, 10, 2), // 生成一个随机数组
            'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
            'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
            'Color': Random.color(), // 生成一个颜色随机值
            'Paragraph': Random.paragraph(2, 5), //生成2至5个句子的文本
            'Name': Random.name(), // 生成姓名
            'Url': Random.url(), // 生成web地址
            'Address': Random.province() // 生成地址
        }
    });
};