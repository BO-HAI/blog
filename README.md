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