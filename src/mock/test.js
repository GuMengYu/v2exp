import Mock from 'mockjs';
// 获取 mock.Random 对象
const MRandom = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
  let newsList = []
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      title: MRandom.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: MRandom.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: MRandom.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }

  return newsList;
}

const toDayHot = () => {
  return {
    code: 'ok',
    data : {
      "hotNodes":[
        {"id":"qna","label":"问与答"},
        {"id":"jobs","label":"酷工作"},
        {"id":"programmer","label":"程序员"},
        {"id":"share","label":"分享发现"},
        {"id":"macos","label":"macOS"},
        {"id":"create","label":"分享创造"},
        {"id":"python","label":"Python"},
        {"id":"apple","label":"Apple"},
        {"id":"career","label":"职场话题"},
        {"id":"bb","label":"宽带症候群"},
        {"id":"android","label":"Android"},
        {"id":"gts","label":"全球工单系统"},
        {"id":"iphone","label":"iPhone"},
        {"id":"mbp","label":"MacBook Pro"},
        {"id":"cv","label":"求职"}
      ],
      "newNodes":[
        {"id":"msfs","label":"微软飞行模拟"},
        {"id":"pygame","label":"PyGame"},
        {"id":"godot","label":"Godot"},
        {"id":"busuu","label":"Busuu"},
        {"id":"notion","label":"Notion"},
        {"id":"neovim","label":"Neovim"},
        {"id":"ps5","label":"PlayStation 5"},
        {"id":"watchos","label":"watchOS"},
        {"id":"ipados","label":"iPadOS"},
        {"id":"terminal","label":"Terminal"},
        {"id":"miracleplus","label":"奇绩创坛"},
        {"id":"bilibili","label":"哔哩哔哩"},
        {"id":"testflight","label":"TestFlight"},
        {"id":"wenyan","label":"文言文编程语言"},
        {"id":"graphql","label":"GraphQL"},
        {"id":"2020","label":"2020"},
        {"id":"nebula","label":"Nebula"},
        {"id":"objc","label":"Objective-C"},
        {"id":"cpp","label":"C++"},
        {"id":"meraki","label":"Meraki"}
      ],
      "hotTopics":[
        {"avatarImg":"https://cdn.v2ex.com/gravatar/86ba9c00cf69caa0776f3207ffe8ea4b?s=24&d=retro","id":"701141","title":"你们遇到过组长强制要求代码实现的吗?"},
        {"avatarImg":"https://cdn.v2ex.com/gravatar/c1135859d89adce020dbdc0343b2eb69?s=24&d=retro","id":"701025","title":"1W 多的 MBP 和 五六千的 WIN 本，差距大吗？不看屏幕的话"},
        {"avatarImg":"https://cdn.v2ex.com/avatar/7cb3/ea38/465532_normal.png?m=1579222590","id":"701128","title":"有没有什么助眠的方法"},
        {"avatarImg":"https://cdn.v2ex.com/avatar/ada0/7f07/330266_normal.png?m=1584896457","id":"701082","title":"晚上 10 点躺在床上，发现合租了两年的室友把你的 AirPods Pro 调包了，你会怎么办？"},
        {"avatarImg":"https://cdn.v2ex.com/gravatar/9d78d98eb716bac9bc41db70958f6b31?s=24&d=retro","id":"701131","title":"三年工作经验平薪跳槽去大厂值得吗？"},
        {"avatarImg":"https://cdn.v2ex.com/avatar/46c6/6e44/206024_normal.png?m=1574980271","id":"701241","title":"你怎么评价纯银这个人？"},
        {"avatarImg":"https://cdn.v2ex.com/avatar/1886/2182/461515_normal.png?m=1577863370","id":"701124","title":"也没融钱，就俩程序员自己搞， 12 个月从 0 到 700 万"},
        {"avatarImg":"https://cdn.v2ex.com/gravatar/a19cf4180202dab1be072042bd9c990b?s=24&d=retro","id":"701157","title":"如何获得对自己长的好不好看的客观评价？"}
      ]
    }
  };
}
const tabTopicList = () => {
  return {
    code : 'ok',
    data: {
      "tabNodes":[],
      "tabTopics":[
        {"avator":"https://cdn.v2ex.com/gravatar/94fb0e2d94964bc2e49c47a3d7d36d40?s=48&d=retro","title":"纪录一次 pdd 糟糕的购物经历，准备销号，从此弃用拼多多","id":"701452","votes":0,"nodeName":"分享发现","nodeId":"share","author":"tianlianjie","reply":{"count":"159","lastFrom":"BruceTu","lastReplyTime":"4 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/c4b9/e5f6/210511_normal.png?m=1597968590","title":"上班喜欢喝茶（红茶）推荐一下","id":"701438","votes":0,"nodeName":"问与答","nodeId":"qna","author":"chaos93","reply":{"count":"69","lastFrom":"impony","lastReplyTime":"20 分钟前"}},
        {"avator":"https://cdn.v2ex.com/gravatar/2ba0594cc32e1e33863affd0b47a26cf?s=48&d=retro","title":"讲真的，受不了开放式办公","id":"701470","votes":0,"nodeName":"程序员","nodeId":"programmer","author":"oatw","reply":{"count":"62","lastFrom":"oneWalker12","lastReplyTime":"2 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/a270/81f6/352971_normal.png?m=1545707600","title":"你们都用的哪款行车记录仪?","id":"701440","votes":1,"nodeName":"问与答","nodeId":"qna","author":"nikolausliu","reply":{"count":"57","lastFrom":"miaoxinwei","lastReplyTime":"7 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/8128/4784/346671_normal.png?m=1572412507","title":"最近和老婆做了一个重大决定，两人都从南京去苏州工作，请问苏州.net/.net core 工作机会多吗","id":"701476","votes":0,"nodeName":"问与答","nodeId":"qna","author":"onecode","reply":{"count":"47","lastFrom":"leafre","lastReplyTime":"4 分钟前"}},
        {"avator":"https://cdn.v2ex.com/gravatar/7e7b73ae551209f4a270c126a43f751f?s=48&d=retro","title":"怎样才能不做一颗韭菜，觉得活着好难没有意义","id":"701548","votes":0,"nodeName":"程序员","nodeId":"programmer","author":"EdmondYoung","reply":{"count":"47","lastFrom":"overthemoon","lastReplyTime":"刚刚"}},
        {"avator":"https://cdn.v2ex.com/gravatar/c240486a0689e01c19351a4a334ca646?s=48&d=retro","title":"有没有提高睡眠质量的方法","id":"701442","votes":0,"nodeName":"问与答","nodeId":"qna","author":"Focusgan","reply":{"count":"40","lastFrom":"korokke","lastReplyTime":"几秒前"}},
        {"avator":"https://cdn.v2ex.com/gravatar/08efe27a761ebd391a2d4ee197ef2a4f?s=48&d=retro","title":"有没有或者能不能开发这样一个平台，有人在平台上提出想法，然后开发啦，美工啦，凭借兴趣组团开发？","id":"701448","votes":0,"nodeName":"奇思妙想","nodeId":"ideas","author":"zoikhemlab","reply":{"count":"40","lastFrom":"Zane0001","lastReplyTime":"26 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/775a/a3fb/400954_normal.png?m=1596784767","title":"一个 Spring Boot 应用的 jar 包竟然要一百多兆？这就是我接手的项目","id":"701488","votes":1,"nodeName":"Java","nodeId":"java","author":"qwerthhusn","reply":{"count":"39","lastFrom":"benlyons","lastReplyTime":"28 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/f4cf/ab79/14067_normal.png?m=1589939531","title":"后端来问问:是不是安卓开发比 iOS 更难?","id":"701491","votes":0,"nodeName":"程序员","nodeId":"programmer","author":"xiaotianhu","reply":{"count":"38","lastFrom":"Randomjo","lastReplyTime":"11 分钟前"}},
        {"avator":"https://cdn.v2ex.com/gravatar/85c7ec401eefdff7d8a0e52d632add37?s=48&d=retro","title":"新车倒库剐蹭到柱子上的防撞条了，心疼！","id":"701478","votes":0,"nodeName":"汽车","nodeId":"car","author":"brucewar","reply":{"count":"35","lastFrom":"lxrmido","lastReplyTime":"1 小时 20 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/bdeb/e2f1/33357_normal.png?m=1359567498","title":"在京东也翻车了，返修被偷换了硬件。","id":"701579","votes":0,"nodeName":"京东","nodeId":"jd","author":"yech1990","reply":{"count":"35","lastFrom":"lovecy","lastReplyTime":"4 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/b3c5/7c85/353188_normal.png?m=1543990242","title":"为什么大家都不喜欢 Touch bar 我觉得很香？ 附配置","id":"701528","votes":0,"nodeName":"MacBook Pro","nodeId":"mbp","author":"Stain5","reply":{"count":"34","lastFrom":"20015jjw","lastReplyTime":"10 分钟前"}},
        {"avator":"https://cdn.v2ex.com/avatar/59dc/c634/445892_normal.png?m=1577094179","title":"0202 年了, 现在在 Windows 下快乐编程的姿势是什么❓","id":"701485","votes":0,"nodeName":"程序员","nodeId":"programmer","author":"KaynW","reply":{"count":"32","lastFrom":"wellsc","lastReplyTime":"38 分钟前"}},
      ]
    }
  }
}
const topicData = () => ({
  code : 'ok',
    data: [
      {
            "node": {
                "avatar_large": "https://cdn.v2ex.com/navatar/03af/dbd6/63_large.png?m=1596211530",
                "name": "java",
                "avatar_normal": "https://cdn.v2ex.com/navatar/03af/dbd6/63_normal.png?m=1596211530",
                "title": "Java",
                "url": "https://www.v2ex.com/go/java",
                "topics": 3798,
                "footer": "",
                "header": "The most popular programming language.",
                "title_alternative": "Java",
                "avatar_mini": "https://cdn.v2ex.com/navatar/03af/dbd6/63_mini.png?m=1596211530",
                "stars": 4081,
                "aliases": [
                ],
                "root": false,
                "id": 63,
                "parent_node_name": "programming"
            },
            "member": {
                "username": "gransh",
                "website": "",
                "github": "",
                "psn": "",
                "avatar_normal": "https://cdn.v2ex.com/avatar/5fad/1233/367295_mini.png?m=1544065339",
                "bio": "",
                "url": "https://www.v2ex.com/u/gransh",
                "tagline": "",
                "twitter": "",
                "created": 1543736687,
                "avatar_large": "https://cdn.v2ex.com/avatar/5fad/1233/367295_mini.png?m=1544065339",
                "avatar_mini": "https://cdn.v2ex.com/avatar/5fad/1233/367295_mini.png?m=1544065339",
                "location": "",
                "btc": "",
                "id": 367295
            },
            "last_reply_by": "kanepan19",
            "last_touched": 1601102776,
            "title": "用 springboot 写一个简单的 web 项目，不分离，搭配什么前端框架好？",
            "url": "https://www.v2ex.com/t/710439",
            "created": 1601018160,
            "content": "想自己独立完成一个 web 项目，自己对后端比较熟悉，前端那些一知半解。用的 springboot 框架，搭配什么前端 ui 类框架比较好，易于学习，界面美观的。\r\n有推荐 vue-element-admin，查了查好像过于复杂（功能上的），而且还得单独部署的样子。\r\nbootstrap 好像又过于简单了。\r\n是不是 layui elementui 这种会比较合适一些？\r\n另外对于前端的打包也不太了解，有没有集成到 springboot 项目里直接调用的？",
            "content_rendered": "想自己独立完成一个 web 项目，自己对后端比较熟悉，前端那些一知半解。用的 springboot 框架，搭配什么前端 ui 类框架比较好，易于学习，界面美观的。<br />有推荐 vue-element-admin，查了查好像过于复杂（功能上的），而且还得单独部署的样子。<br />bootstrap 好像又过于简单了。<br />是不是 layui elementui 这种会比较合适一些？<br />另外对于前端的打包也不太了解，有没有集成到 springboot 项目里直接调用的？",
            "last_modified": 1601018160,
            "replies": 42,
            "id": 710439
      }
    ]
})

const replies = () => ({
  code: 'ok',
  data: [
    {
        "member": {
            "username": "misaka19000",
            "website": "http://nosuchfield.com",
            "github": "RitterHou",
            "psn": "",
            "avatar_normal": "https://cdn.v2ex.com/avatar/4271/6be2/154020_mini.png?m=1597919658",
            "bio": "",
            "url": "https://www.v2ex.com/u/misaka19000",
            "tagline": "",
            "twitter": "",
            "created": 1451885054,
            "avatar_large": "https://cdn.v2ex.com/avatar/4271/6be2/154020_mini.png?m=1597919658",
            "avatar_mini": "https://cdn.v2ex.com/avatar/4271/6be2/154020_mini.png?m=1597919658",
            "location": "Nanjing",
            "btc": "",
            "id": 154020
        },
        "created": 1601018418,
        "topic_id": 710439,
        "content": "jQuery",
        "content_rendered": "jQuery",
        "last_modified": 1601018418,
        "member_id": 154020,
        "id": 9551389
    },
    {
        "member": {
            "username": "coang",
            "website": null,
            "github": null,
            "psn": null,
            "avatar_normal": "https://cdn.v2ex.com/gravatar/e8de98ac7f8fbe70f92db8a15e81ac88?s=24&d=retro",
            "bio": null,
            "url": "https://www.v2ex.com/u/coang",
            "tagline": null,
            "twitter": null,
            "created": 1532337207,
            "avatar_large": "https://cdn.v2ex.com/gravatar/e8de98ac7f8fbe70f92db8a15e81ac88?s=24&d=retro",
            "avatar_mini": "https://cdn.v2ex.com/gravatar/e8de98ac7f8fbe70f92db8a15e81ac88?s=24&d=retro",
            "location": null,
            "btc": null,
            "id": 333361
        },
        "created": 1601018434,
        "topic_id": 710439,
        "content": "去看看 guns 吧.. 有分离有不分离..",
        "content_rendered": "去看看 guns 吧.. 有分离有不分离..",
        "last_modified": 1601018434,
        "member_id": 333361,
        "id": 9551392
    },
    {
        "member": {
            "username": "sambawy",
            "website": null,
            "github": null,
            "psn": null,
            "avatar_normal": "https://cdn.v2ex.com/gravatar/68e5310c41c190e0c37465d6965165b2?s=24&d=retro",
            "bio": null,
            "url": "https://www.v2ex.com/u/sambawy",
            "tagline": null,
            "twitter": null,
            "created": 1481600343,
            "avatar_large": "https://cdn.v2ex.com/gravatar/68e5310c41c190e0c37465d6965165b2?s=24&d=retro",
            "avatar_mini": "https://cdn.v2ex.com/gravatar/68e5310c41c190e0c37465d6965165b2?s=24&d=retro",
            "location": null,
            "btc": null,
            "id": 205734
        },
        "created": 1601018448,
        "topic_id": 710439,
        "content": "H+",
        "content_rendered": "H+",
        "last_modified": 1601018448,
        "member_id": 205734,
        "id": 9551394
    },
    {
        "member": {
            "username": "oma1989",
            "website": "",
            "github": "",
            "psn": "",
            "avatar_normal": "https://cdn.v2ex.com/avatar/370a/92dd/164233_mini.png?m=1545791053",
            "bio": "",
            "url": "https://www.v2ex.com/u/oma1989",
            "tagline": "",
            "twitter": "",
            "created": 1458538786,
            "avatar_large": "https://cdn.v2ex.com/avatar/370a/92dd/164233_mini.png?m=1545791053",
            "avatar_mini": "https://cdn.v2ex.com/avatar/370a/92dd/164233_mini.png?m=1545791053",
            "location": "青岛",
            "btc": "",
            "id": 164233
        },
        "created": 1601018571,
        "topic_id": 710439,
        "content": "jQuery EasyUI",
        "content_rendered": "jQuery EasyUI",
        "last_modified": 1601018571,
        "member_id": 164233,
        "id": 9551410
    },
    {
        "member": {
            "username": "lipcao",
            "website": "",
            "github": null,
            "psn": null,
            "avatar_normal": "https://cdn.v2ex.com/gravatar/4ae54b4c97bcdc381de7360eaabd956a?s=24&d=retro",
            "bio": "",
            "url": "https://www.v2ex.com/u/lipcao",
            "tagline": "",
            "twitter": null,
            "created": 1559648022,
            "avatar_large": "https://cdn.v2ex.com/gravatar/4ae54b4c97bcdc381de7360eaabd956a?s=24&d=retro",
            "avatar_mini": "https://cdn.v2ex.com/gravatar/4ae54b4c97bcdc381de7360eaabd956a?s=24&d=retro",
            "location": "",
            "btc": null,
            "id": 418748
        },
        "created": 1601018869,
        "topic_id": 710439,
        "content": "thymeleaf 就够用了吧，画个页面直接 thymeleaf 渲染",
        "content_rendered": "thymeleaf 就够用了吧，画个页面直接 thymeleaf 渲染",
        "last_modified": 1601018869,
        "member_id": 418748,
        "id": 9551443
    },
    {
        "member": {
            "username": "tangkaichuan",
            "website": "",
            "github": "",
            "psn": "",
            "avatar_normal": "https://cdn.v2ex.com/avatar/188f/d109/338173_mini.png?m=1583073329",
            "bio": "",
            "url": "https://www.v2ex.com/u/tangkaichuan",
            "tagline": "",
            "twitter": "",
            "created": 1533248078,
            "avatar_large": "https://cdn.v2ex.com/avatar/188f/d109/338173_mini.png?m=1583073329",
            "avatar_mini": "https://cdn.v2ex.com/avatar/188f/d109/338173_mini.png?m=1583073329",
            "location": "",
            "btc": "",
            "id": 338173
        },
        "created": 1601018870,
        "topic_id": 710439,
        "content": "springboot 中可以放前端资源不用单独部署。还可以配置成打包的时候把前端部分分离出来，和 jar 包同目录，直接跑起来就能访问，方便前端资源更新",
        "content_rendered": "springboot 中可以放前端资源不用单独部署。还可以配置成打包的时候把前端部分分离出来，和 jar 包同目录，直接跑起来就能访问，方便前端资源更新",
        "last_modified": 1601018870,
        "member_id": 338173,
        "id": 9551444
    },
    {
        "member": {
            "username": "gransh",
            "website": "",
            "github": "",
            "psn": "",
            "avatar_normal": "https://cdn.v2ex.com/avatar/5fad/1233/367295_mini.png?m=1544065339",
            "bio": "",
            "url": "https://www.v2ex.com/u/gransh",
            "tagline": "",
            "twitter": "",
            "created": 1543736687,
            "avatar_large": "https://cdn.v2ex.com/avatar/5fad/1233/367295_mini.png?m=1544065339",
            "avatar_mini": "https://cdn.v2ex.com/avatar/5fad/1233/367295_mini.png?m=1544065339",
            "location": "",
            "btc": "",
            "id": 367295
        },
        "created": 1601019383,
        "topic_id": 710439,
        "content": "@lipcao thymeleaf 好像没组件",
        "content_rendered": "@<a href=\"/member/lipcao\">lipcao</a> thymeleaf 好像没组件",
        "last_modified": 1601019383,
        "member_id": 367295,
        "id": 9551505
    },
    {
        "member": {
            "username": "fallinlovewith",
            "website": "",
            "github": "XielinX",
            "psn": "",
            "avatar_normal": "https://cdn.v2ex.com/avatar/327d/9878/468230_mini.png?m=1587780935",
            "bio": "",
            "url": "https://www.v2ex.com/u/fallinlovewith",
            "tagline": "",
            "twitter": "",
            "created": 1581058712,
            "avatar_large": "https://cdn.v2ex.com/avatar/327d/9878/468230_mini.png?m=1587780935",
            "avatar_mini": "https://cdn.v2ex.com/avatar/327d/9878/468230_mini.png?m=1587780935",
            "location": "",
            "btc": "",
            "id": 468230
        },
        "created": 1601020054,
        "topic_id": 710439,
        "content": "@gransh \r\n她的 th:fragment 算不?",
        "content_rendered": "@<a href=\"/member/gransh\">gransh</a> <br />她的 th:fragment 算不?",
        "last_modified": 1601020054,
        "member_id": 468230,
        "id": 9551576
    },
    {
        "member": {
            "username": "lower",
            "website": "null4.cn",
            "github": "",
            "psn": "",
            "avatar_normal": "https://cdn.v2ex.com/avatar/9197/a649/50801_mini.png?m=1577426833",
            "bio": "",
            "url": "https://www.v2ex.com/u/lower",
            "tagline": "",
            "twitter": "",
            "created": 1385614470,
            "avatar_large": "https://cdn.v2ex.com/avatar/9197/a649/50801_mini.png?m=1577426833",
            "avatar_mini": "https://cdn.v2ex.com/avatar/9197/a649/50801_mini.png?m=1577426833",
            "location": "",
            "btc": "",
            "id": 50801
        },
        "created": 1601020567,
        "topic_id": 710439,
        "content": "不想打包，直接引用 ui 库的 js 也可以的呀",
        "content_rendered": "不想打包，直接引用 ui 库的 js 也可以的呀",
        "last_modified": 1601020567,
        "member_id": 50801,
        "id": 9551622
    },
    {
        "member": {
            "username": "idoggy",
            "website": null,
            "github": null,
            "psn": null,
            "avatar_normal": "https://cdn.v2ex.com/gravatar/83e0b9b1bd618ee08954bf252fe74577?s=24&d=retro",
            "bio": null,
            "url": "https://www.v2ex.com/u/idoggy",
            "tagline": null,
            "twitter": null,
            "created": 1512377120,
            "avatar_large": "https://cdn.v2ex.com/gravatar/83e0b9b1bd618ee08954bf252fe74577?s=24&d=retro",
            "avatar_mini": "https://cdn.v2ex.com/gravatar/83e0b9b1bd618ee08954bf252fe74577?s=24&d=retro",
            "location": null,
            "btc": null,
            "id": 272247
        },
        "created": 1601020934,
        "topic_id": 710439,
        "content": "前端 npm 打包后就是传统的静态资源，放在 Java 的资源目录里就可以了。jQuery 除非你急着赶作业，不然还是了解下主流前端更好。",
        "content_rendered": "前端 npm 打包后就是传统的静态资源，放在 Java 的资源目录里就可以了。jQuery 除非你急着赶作业，不然还是了解下主流前端更好。",
        "last_modified": 1601020934,
        "member_id": 272247,
        "id": 9551686
    },
    {
        "member": {
            "username": "binbinyouliiii",
            "website": null,
            "github": null,
            "psn": null,
            "avatar_normal": "https://cdn.v2ex.com/avatar/15a7/218d/99608_mini.png?m=1480142459",
            "bio": null,
            "url": "https://www.v2ex.com/u/binbinyouliiii",
            "tagline": null,
            "twitter": null,
            "created": 1424700589,
            "avatar_large": "https://cdn.v2ex.com/avatar/15a7/218d/99608_mini.png?m=1480142459",
            "avatar_mini": "https://cdn.v2ex.com/avatar/15a7/218d/99608_mini.png?m=1480142459",
            "location": null,
            "btc": null,
            "id": 99608
        },
        "created": 1601021254,
        "topic_id": 710439,
        "content": "thymeleaf 我记得好难用的，写完第二天就看不懂了。\r\n用 freemarker 。",
        "content_rendered": "thymeleaf 我记得好难用的，写完第二天就看不懂了。<br />用 freemarker 。",
        "last_modified": 1601021254,
        "member_id": 99608,
        "id": 9551716
    }
]})
export { produceNewsData, toDayHot, tabTopicList, topicData , replies};
