/**
 * @file:
 * @author: BO HAI (1169282772@qq.com).
 * @date:   2016/10/13
 */

var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

module.exports = User;

/**
 * 存储用户信息
 * @param callback
 */
User.prototype.save = function (callback) {
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    };

    // 打开数据
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }

        // 读取users集合
        db.collection('users', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }

            collection.inster(user, {
                safe: true
            }, function (err, user) {
                mongodb.close();

                if (err) {
                    return callback(err);
                }

                callback(null, user[0]);
            });
        });
    });
};

/**
 * 读取用户信息
 * @param name
 * @param callback
 */
User.prototype.get = function (name, callback) {

    // 打开数据
    mongodb.open(function (err, db) {
        if (err) {
            mongodb.close();
            return callback(err);
        }

        db.collection('users', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }

            collection.findOne({
                name: name
            }, function (err, user) {
                mongodb.close();

                if (err) {
                    return callback(err);
                }

                callback(null, user);
            });
        });
    });
};

