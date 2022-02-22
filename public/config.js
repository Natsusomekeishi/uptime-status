// 配置
window.Config = {

  // 站点名
  SiteName: 'KFS服务器',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptimerobot.keishi.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790711803-d7049f8354b34c2ffbaaa57d',//官网
    'm790711729-c8f5677b4199e5d28d04b20c',//主线路
    'm790711823-2abfd1e2657331749fb16f1a',//备用
    'm790711824-6bea66796fb85a24e1993ba4',//国外
    'm790711825-a3361d5076fca0909e7c39fd',//寒暑假
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://status.org.cn/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
