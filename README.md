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