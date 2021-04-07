const KoaRouter = require("koa-router");
const router = new KoaRouter();

var Mock = require("mockjs");
const Random = Mock.Random;

// 路由开始
router.get("/", async (ctx, next) => {
  const hello = function () {
    let messages = "请求通了测试";
    return {
      messages: messages,
    };
  };
  ctx.body = await hello();
});

// 路由开始
router.get("/mock/aaa", async (ctx, next) => {
  const hello = function () {
    let messages = "请求通了";
    return {
      messages: messages,
    };
  };
  ctx.body = await hello();
});

// 路由开始
router.post("/mock/api/login", async (ctx, next) => {
  const hello = function () {
    let messages = "登录成功";
    return {
      messages: messages,
      user: {
        username: "admin",
        token: "fdahfdsahfdosafhidsoafuidgsau fgdsa;hfdpisaufdsa fjdsa",
      },
    };
  };
  ctx.body = await hello();
});

// api
router.get("/mock/api/", async (ctx, next) => {
  const hello = function () {
    let messages = "hello world, 请求通了";
    return {
      messages: messages,
    };
  };
  ctx.body = await hello();
});

router.get("/mock/api/articles", async (ctx, next) => {
  const prodeceNewData = function () {
    let articles = [];
    for (let i = 0; i < 25; i++) {
      let newArticleObject = {
        title: Random.csentence(5, 30), //  Random.csentence( min, max )
        author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        createdAt: Random.date(),
      };
      articles.push(newArticleObject);
    }
    return {
      articles: articles,
      total: articles.length,
    };
  };
  ctx.body = await prodeceNewData();
});

router.post("/mock/api/user", async (ctx, next) => {
  const prodeceNewData = function () {
    let articles = [];
    for (let i = 0; i < 25; i++) {
      let newArticleObject = {
        id: Random.csentence(5, 30), //  Random.csentence( min, max )
        username: Random.cname(),
        author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        createdAt: Random.date(),
      };
      articles.push(newArticleObject);
    }
    return {
      articles: articles,
      total: articles.length,
    };
  };
  ctx.body = await prodeceNewData();
});


module.exports = router;
