# blog

## 问题集合

##### 1.启动MongoDB错误
```
➜  bin mongod --dbpath ../blog/
command not found: mongod

```

"Mongod" isn't a stand-alone command. You need to run the command like so ./mongodb/bin/mongod

I used http://www.bigspaceship.com/mongodb-on-mac/ to help me answer this question.


You can either specify the path in one of the following files: .profile, .bashrc, or .bash_profile
```
export PATH="$PATH:/usr/local/mongodb/bin"  // 你的mongo路径
```

##### 2.req.flash() requires sessions

```
req.flash() requires sessions

Error: req.flash() requires sessions
    at Error (native)
    at IncomingMessage._flash [as flash] (/Users/bohai/myProject/blog/node_modules/connect-flash/lib/flash.js:60:41)
    at /Users/bohai/myProject/blog/routes/index.js:19:17
    at Layer.handle [as handle_request] (/Users/bohai/myProject/blog/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/bohai/myProject/blog/node_modules/express/lib/router/route.js:131:13)
    at Route.dispatch (/Users/bohai/myProject/blog/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/bohai/myProject/blog/node_modules/express/lib/router/layer.js:95:5)
    at /Users/bohai/myProject/blog/node_modules/express/lib/router/index.js:277:22
    at Function.process_params (/Users/bohai/myProject/blog/node_modules/express/lib/router/index.js:330:12)
    at next (/Users/bohai/myProject/blog/node_modules/express/lib/router/index.js:271:10)
```

注意顺序
```
app.use(session({
    secret: settings.cookieSecret,
    key: settings.db,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
    store: new MongoStore({
        db: settings.db,
        host: settings.host,
        post: settings.post
    })
}));
app.use(flash());
```

##### 3.Error: Error setting TTL index on collection : sessions

mongodb版本问题

在package.json修改 "mongodb"：“2.0.42”， “connect-mongo”:“0.8.2” 运行npm install安装模块,打开app.js，添加以下代码：
```
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(session({
  secret: settings.cookieSecret,
  key: settings.db,//cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
  store: new MongoStore({
    db: settings.db,
    host: settings.host,
    port: settings.port
  })
}));
```

##### 4.process.nextTick(function() { throw err; })

在注册时插入数据不是，collection.insert ，而是collection.insertOne;

请参考这个：

https://github.com/mongodb/node-mongodb-native/blob/0642f18fd85037522acf2e7560148a8bc5429a8a/docs/content/tutorials/changes-from-1.0.md#L38