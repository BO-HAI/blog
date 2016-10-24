/**
 * @file:
 * @author: BO HAI (1169282772@qq.com).
 * @date:   2016/10/20
 */

var mongodb = require('./db');
var markdown = require('markdown').markdown;

function Post(name, title, post) {
    this.name = name;
    this.title = title;
    this.post = post;
}

module.exports = Post;

Post.prototype.save = function (callback) {
    var date = new Date();
    var time = {
        date: date,
        year: date.getFullYear(),
        month: date.getFullYear() + '-' + (date.getMonth() + 1),
        day: date.getFullYear() + '-' +(date.getMonth() + 1) + '-' + date.getDate(),
        minute: date.getFullYear() + '-' +(date.getMonth() + 1) + '-' + date.getDate() + ' ' +
        date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    };

    var post = {
        name: this.name,
        title: this.title,
        post: this.post,
        time: time
    };

    //打开数据
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        // 读取post集合
        db.collection('posts', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            // 插入一条数据
            collection.insertOne(post, {safe: true}, function (err, collection) {
                mongodb.close();

                if (err) {
                    return callback(err);
                }

                callback(null);
            });
        });
    });
};

Post.get = function(name, callback) {
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }

        db.collection('posts', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }

            var query = {};

            if (name) {
                query.name = name;
            }

            collection.find(query).sort({time: -1}).toArray(function (err, docs) {
                if (err) {
                    return callback(err);
                }

                docs.forEach(function (doc) {
                    doc.post = markdown.toHTML(doc.post);
                });

                callback(null, docs);
            });
        });
    });
};