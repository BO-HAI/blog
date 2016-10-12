/**
 * @file:
 * @author: BO HAI (1169282772@qq.com).
 * @date:   2016/10/12
 */

var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').connection,
    Server = require('mongodb').Server;

module.exports = new Db(settings.db, new Server(settings.host, settings.post), {safe: true});